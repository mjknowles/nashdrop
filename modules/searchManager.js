"use strict";

function formatRecycleData (arr) {
  
  let lastIdx = arr.length - 1;
  return {
    name: arr[8],
    address: arr[9],
    city: arr[10],
    state: arr[11],
    zip: arr[12],
    lat: arr[lastIdx][1],
    long: arr[lastIdx][2]
  }
}

let searchManager = {
  formatRecycleData: formatRecycleData
};


module.exports = searchManager;