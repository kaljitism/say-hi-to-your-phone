/*jshint esversion: 6*/

const http = require('node:http');

const port = 4080;
const host = "127.0.0.1";

const server = http.createServer((req, res) => {
  const data = {message: "Hi There!"};

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Connection", "close");
  res.statusCode = 200;
  res.end(JSON.stringify(data));
});

server.listen(port, host, () => {
  console.log(`Server running on port ${port}`);
});
