const http = require("http");

var server = http.createServer();

server.on("request", (request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/html"
  });
  response.end(`<h1>hello ~ </h1>`);
});

server.listen(8080);
