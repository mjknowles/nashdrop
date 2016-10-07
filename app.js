var express = require('express');
var index = require('./routes/index');
//var stats = require('./routes/stats');
var search = require('./routes/search');
var app = express();

app.use(express.static(__dirname + '/public'));
//add this so the browser can GET the bower files
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.use('/', index);
//app.use('/stats', stats);
app.use('/search', search);

var port = process.env.PORT || 3001;
app.listen(port, function() {
  console.log("Listening on port " + port);
});

module.exports = app;
