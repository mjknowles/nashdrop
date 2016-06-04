"use strict";

var fs = require('fs');
var formatManager = require('../modules/formatManager');

function getDropOffLocations() {
    var data = [];
    var recyclingCenters =  JSON.parse(fs.readFileSync('data/recycleData.json', 'utf8')).data;

    recyclingCenters = recyclingCenters.map((center) => formatManager.formatRecycleData(center));

    /*var libraries =  JSON.parse(fs.readFileSync('data/libraryData.json', 'utf8')).data;
    libraries = libraries.map((center) => formatManager.formatLibraryData(center));
    
    var pharmas =  JSON.parse(fs.readFileSync('data/pharmaData.json', 'utf8')).data;
    pharmas = pharmas.map((center) => formatManager.formatPharmaData(center));*/
    
    data = data.concat(recyclingCenters);

    return data;
}

let dropOffRepo = {
  getDropOffLocations: getDropOffLocations
};


module.exports = dropOffRepo;