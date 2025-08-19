// Express web server.

var express = require('express');
var app = express();
var baseController = require('./controllers/baseController');


// Index Route.
app.get('/', baseController);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
