"use strict";

var express = require('express');
var router = express.Router();
var stats = require('../modules/initialize-stats');
var dropoffFinder = require('../modules/dropoff-finder');

// returns only the locations that accept the specified item
router.get('/:item', function(req, res) {
    let item = req.params.item;
    stats.logSearch(item);
    dropoffFinder.getDropoffLocations(item, res);
})

// returns all dropoff locations
router.get('/', function(req, res) {
    dropoffFinder.getDropoffLocations(null, res);
})

module.exports = router;