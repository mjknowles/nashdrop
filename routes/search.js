"use strict";

var express = require('express');
var router = express.Router();
var stats = require('../modules/initializeStats');
var request = require('request');
var formatMapper = require('../modules/formatMapper');

function getRecyclingCenters(item, res)
{
    request('https://data.nashville.gov/resource/9d2e-48mm.json', function(e, resp, body)
    {
      if(!e & resp.statusCode == 200)
      {
        var centers = JSON.parse(body).map((center) => formatMapper.mapRecycleData(center));

        if(item && item !== '')
        {
            centers = centers.filter((center) => {
                let items = center.acceptedItems
                for (var i in items) {
                    let itemStr = items[i];
                    if (itemStr.indexOf(item) >= 0){
                        return true;
                    } 
                }
                return false;
            });
        }        
        res.send(centers);
      }
    });
} 

router.get('/:item', function(req, res) {
    let item = req.params.item;
    stats.logSearch(item);
    getRecyclingCenters(item, res);
})

//returns all recycle centers
router.get('/', function(req, res) {
    getRecyclingCenters(null, res);
})

module.exports = router;