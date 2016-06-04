"use strict";

var express = require('express');
var router = express.Router();
var https = require('https');
var stats = require('../modules/initializeStats');
var dropOffRepo = require('../modules/dropOffRepo');


router.get('/:item', function(req, res) {
    let item = req.params.item;
    stats.logSearch(item);

    var data = dropOffRepo.getDropOffLocations();

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

    res.send(data);
})

//returns all recycle centers
router.get('/', function(req, res) {
    var data = dropOffRepo.getDropOffLocations();
    res.send(data);
})

module.exports = router;