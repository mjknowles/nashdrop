"use strict";

var fs = require('fs');


function getDropOffLocations() {
    var recyclingCenters =  JSON.parse(fs.readFileSync('data/recycleData.json', 'utf8')).data;
    recyclingCenters = recyclingCenters.map((center) => formatManager.formatRecycleData(center));
    
    /*var libraries =  JSON.parse(fs.readFileSync('data/libraryData.json', 'utf8')).data;
    libraries = libraries.map((center) => formatManager.formatLibraryData(center));
    
    var pharmas =  JSON.parse(fs.readFileSync('data/pharmaData.json', 'utf8')).data;
    pharmas = pharmas.map((center) => formatManager.formatPharmaData(center));*/
}

let dropOffRepo = {
  getDropOffLocations: getDropOffLocations
};


module.exports = dropOffRepo;