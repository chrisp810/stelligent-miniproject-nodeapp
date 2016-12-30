// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with a simple HTML page to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end("<html><head><title>Stelligent Mini-Project: Chris Piepenbring</title></head>\n<body><h2>Automation for the People</h2></body></html>\n");
});

// Listen on port 80, using all IPs
server.listen(80);

// Put a friendly message on the terminal
console.log('Server running on', server.address());
