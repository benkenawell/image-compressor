import express from 'express';
import { join } from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static(fileURLToPath(join(import.meta.url, '../static'))));
app.set('views', fileURLToPath(join(import.meta.url, '../views')));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(parseInt(process.env.PORT ?? "3000"), () => console.log('listening'));
