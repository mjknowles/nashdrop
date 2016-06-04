var express = require('express');
var router = express.Router();
var https = require('https');
var fs = require('fs');

router.get('/', function(req, res) {
    console.log('search ran');
    // res.send(https.get('https://data.nashville.gov/resource/9d2e-48mm.json'));
    var data = JSON.parse(fs.readFileSync('data/recycleData.json', 'utf8'));
    res.send(data);
})

module.exports = router;