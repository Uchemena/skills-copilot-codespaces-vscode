// Create web server to handle incoming requests
// 
// 1. Load http module
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

// 2. Create http server and listen on port 8000 for requests
http.createServer(function (req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  // Send the response body "Hello World"
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  var comment = query.comment;
  if (comment) {
    fs.appendFile('comments.txt', comment + '\n', function (err) {
      if (err) throw err;
      console.log('Comment saved!');
    });
  }
  fs.readFile('index.html', function(err, data) {
    if (err) throw err;
    res.write(data);
    res.end();
  });
}).listen(8000);

// Console will print the message
console.log('Server running at http://
