"use strict";

var express = require('express');
var router = express.Router();
var stats = require('../modules/initializeStats');
var request = require('request');
var formatMapper = require('../modules/formatMapper');

// From the list of all dropoff locations, remove the ones that do not accept the item
// the user wishes to donate
function filterDropoffsByAcceptedItems(dropoffs, item)
{
    if(item && item !== '')
    {
        dropoffs = dropoffs.filter((center) => {
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
    return dropoffs;  
}

// Query the specified endpoint to retrieve the dropoff location data
// format the returned JSON from the data endpoint into our application'send
// standard DTO format
function requestDropoffData(resolve, url, formatter)
{
    request(url, function(e, resp, body)
    {
        if(!e && resp.statusCode == 200)
        {
            resolve(JSON.parse(body).map((center) => formatter(center)));
        }
    });
}

// Retrieve the dropoff locations that accept the user's requested item
function getDropoffLocations(item, res)
{
    let dropoffDataSources = [
        {
            'url' : 'https://data.nashville.gov/resource/9d2e-48mm.json',
            'formatter' : formatMapper.mapRecycleData
        },
        {
            'url' : 'https://data.nashville.gov/resource/ypsv-y7u3.json',
            'formatter' : formatMapper.mapPharmaData
        },
        {
            'url' : 'https://data.nashville.gov/resource/9fjy-9ky5.json',
            'formatter' : formatMapper.mapLibraryData
        }
    ];

    let promises = [];
    dropoffDataSources.forEach(function(dataSource)
    {
        promises.push(new Promise(function(resolve,reject){requestDropoffData(resolve, dataSource.url, dataSource.formatter)}));
    });

    let dropoffs = [];
    Promise.all(promises).then(function(results){
        results.forEach(function(result)
        {
            result.forEach(function(dropoff)
            {
                dropoffs.push(dropoff);
            });
        });
        res.send(filterDropoffsByAcceptedItems(dropoffs, item));
    })
    .catch(function(err){ console.log(err.message)});
}

// returns only the locations that accept the specified item
router.get('/:item', function(req, res) {
    let item = req.params.item;
    stats.logSearch(item);
    getDropoffLocations(item, res);
})

// returns all dropoff locations
router.get('/', function(req, res) {
    getDropoffLocations(null, res);
})

module.exports = router;