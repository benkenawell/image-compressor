# Image Compressor

quick little show of how to compress images on the front end.

Uses:
- [express](https://expressjs.com/) to host a local web server
- [ejs](https://ejs.co/) as a templating engine (although in this case I'm not doing any templating)
- [alpine.js](https://alpinejs.dev/) to provide the front end functionality
  - allows pretty close to bare html, but is still much quicker to write/develop

## To run

1. clone the repo
2. `pnpm install` (or npm install, or yarn, but the repo has a pnpm lock file)
3. `pnpm run serve` will start the server on port 3222
   - alternatively, `node index.js` should also start the server on port 3000, or you can specify another port with a PORT environment variable
4. navigate to [localhost:3222](http://localhost:3222)
   - or whatever port your just started your server on


Alternative method, no server:

Just opening the views/index.ejs file as an html file won't work because you won't get the alpine static script loaded.

If you swap the alpine script tags to pull from the jsdelivr cdn, then it should work.

