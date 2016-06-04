var express = require('express');
var router = express.Router();
var https = require('https');
var fs = require('fs');
var searchManager = require('../modules/searchManager');

router.get('/', function(req, res) {
    console.log('search ran');
    // res.send(https.get('https://data.nashville.gov/resource/9d2e-48mm.json', function (res) {
    //     console.log("res", res.);
    //     res.on('data', function (chunk) {
    //         console.log(chunk);
    //     })
    // }));
    var data = JSON.parse(fs.readFileSync('data/recycleData.json', 'utf8')).data;;
    data = data.map((center) => searchManager.formatRecycleData(center));
    console.log("data after map", data);
    res.send(data.data);
})

module.exports = router;