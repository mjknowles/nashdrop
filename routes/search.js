"use strict";

var express = require('express');
var router = express.Router();
var https = require('https');
var fs = require('fs');
var formatManager = require('../modules/formatManager');

router.get('/:item', function(req, res) {
    let item = req.params.item;
    // res.send(https.get('https://data.nashville.gov/resource/9d2e-48mm.json', function (res) {
    //     console.log("res", res.);
    //     res.on('data', function (chunk) {
    //         console.log(chunk);
    //     })
    // }));
    var data = JSON.parse(fs.readFileSync('data/recycleData.json', 'utf8')).data;
    data = data.map((center) => formatManager.formatRecycleData(center));

    data = data.filter((center) => {
        let items = center.acceptedItems
        for (var i in items) {
            let itemStr = items[i];
            if (itemStr.indexOf(item) >= 0){
                return true;
            } 
        }
        return false;
    });

    console.log("data after map", data);

    res.send(data.data);
})

//returns all recycle centers
router.get('/', function(req, res) {
    let item = req.params.item;

    var data = JSON.parse(fs.readFileSync('data/recycleData.json', 'utf8')).data;;
    data = data.map((center) => formatManager.formatRecycleData(center));

    res.send(data.data);
})

module.exports = router;