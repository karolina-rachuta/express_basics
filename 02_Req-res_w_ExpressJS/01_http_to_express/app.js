import express from 'express';

const app = express();

const hostname = '127.0.0.1';
const port = 3000;


app.use(express.static("public"))

app.get('/', (req, res) => {
  res.end();
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



//http:
// import http from 'http';
// import url from 'url';
// import fs from 'fs';
// import path from 'path';
// import mime from 'mime';
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const findAsset = (name) => {
//   return new Promise((resolve, reject) => {
//     const assetPath = path.resolve(`./public/${name}`);
//     fs.readFile(assetPath, { encoding: 'utf-8' }, (err, asset) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(asset);
//       }
//     });
//   });
// };
//
// const router = {
//   '/ GET': {
//     asset: 'index.html',
//     type: mime.getType('html'),
//   },
//   '/style.css GET': {
//     asset: 'style.css',
//     type: mime.getType('css'),
//   },
// };
//
// const server = http.createServer(async (req, res) => {
//   const method = req.method;
//   const route = url.parse(req.url).pathname;
//   const routeMatch = router[`${route} ${method}`];
//   const { type, asset } = routeMatch;
//
//   res.writeHead(200, { 'Content-Type': type });
//
//   res.write(await findAsset(asset));
//   res.end();
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
