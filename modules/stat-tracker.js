"use strict";

let testStats = {
'searchTerm': 7,
'cardboard': 7,
'glass': 20,
'batteries': 6,
'clothes': 3,
'books': 9,
'metal': 1,
'plastic bags': 31,
'bottles': 9
}

function logSearch (search) {
  // commenting out until this is ready to go as a full feature
  /*f (testStats[search]) {
    testStats[search] += 1;
  } else {
    testStats[search] = 1;
  }*/
}

module.exports = {
  stats: testStats,
  logSearch: logSearch
}