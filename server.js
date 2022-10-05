const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log('🚀 ~ file: server.js ~ line 5 ~ server ~ req', typeof req);
  const assets = 'assets/';
  console.log('🚀 ~ file: server.js ~ line 6 ~ server ~ assets', assets);

  for (const key in req) {
    // console.log('🚀 ~ file: server.js ~ line 10 ~ server ~ key', key);
    if (key === 'url') {
      // console.log('key ', key, 'val ', req[key]);
      const arr = req[key].split('/');
      console.log('🚀 ~ file: server.js ~ line 14 ~ server ~ arr', arr);
      const type = arr[arr.length - 1].split('.')[1];
      console.log('🚀 ~ file: server.js ~ line 15 ~ server ~ type', type);
      // if (type === 'jpg') {
      //   const image = fs.readFileSync(assets + 'images/' + arr[arr.length - 1]);
      //   res.statusCode = 200;
      //   res.setHeader('Content-Type', 'image/png');
      //   res.end(image);
      // }
      if (type === 'css') {
        console.log(' css ', arr[arr.length - 1]);
        const css = fs.readFileSync(assets + 'css/' + arr[arr.length - 1]);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        res.end(css);
      }
    }
  }

  // Your code here
  const indexFile = fs.readFileSync('./index.html');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'html');
  res.end(indexFile);
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
