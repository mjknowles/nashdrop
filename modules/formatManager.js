"use strict";

function formatRecycleData (arr) {

  let accepted = (yesNos) => {
    let acceptedItems = [];

    let recyclables = ['brush/leaves', 'trash', 'furniture/appliances', 'hazardous waste', 'aluminum/metal/tin', 'plastics', 'cardboard/mixed paper', 'glass'];

    yesNos.forEach( (accepted, idx) => {
      if (accepted.indexOf('Y') >= 0){
        acceptedItems.push(recyclables[idx]);
      } 
    });

    return acceptedItems;
  }

  let lastIdx = arr.length - 1;
  
  return {
    name: arr[8],
    address: arr[9],
    city: arr[10],
    state: arr[11],
    zip: arr[12],
    acceptedItems: accepted(arr.slice(23,31)),
    lat: arr[lastIdx][1],
    long: arr[lastIdx][2]
  }
}


let formatManager = {
  formatRecycleData: formatRecycleData,

};


module.exports = formatManager;