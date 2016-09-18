var express = require('express');
var router = express.Router();
var stats = require('../modules/initialize-stats');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(stats);
});

module.exports = router;
