var express = require('express');
var fs      = require('fs');
var buffer  = require('buf');

var app = express.createServer(express.logger());

var text = fs.readFileSync(index.html);
var uncode = text.toString();
app.get('/', function(request, response) {
  response.send(uncode);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});