// lode the http module
var http = require('http') ;

// configure our http server
var server = http.createserver (funcation (request, response) {
  response.writeHead(200, {"content-type": "text/pain"});
  response.end("Hello NodeApp!! \n");
});

// lisen on localhost:8000
server.listen(8000);
console.log("server listening on port 8000 : http://127.0.0.1:8000/");

