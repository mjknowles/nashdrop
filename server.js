  var   express = require('express'),
       app = express(),
       bodyParser = require('body-parser'),
       cors = require('cors'),
       mongoose = require('mongoose'),
       port = process.env.PORT || 8181;

  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.static(__dirname + '/public'));



  app.listen(port, function() {
      console.log('Listening on ' + port);
  });
