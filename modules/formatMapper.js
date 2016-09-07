"use strict";

function mapRecycleData (center) {

  let accepted = (allAcceptable) => {
    let acceptedItems = [];

    let recyclables = ['aluminum/metal/tin', 'cardboard/mixed paper', 'glass', 'hazardous waste', 'plastics', 'brush/leaves', 'furniture/appliances', 'trash'];

    allAcceptable.forEach( (itemAccepted, idx) => {
      if (itemAccepted === 'Y'){
        acceptedItems.push(recyclables[idx]);
      } 
    });

    return acceptedItems;
  }
  
  var lat = null;
  var long = null;
  if(center.mapped_location)
  {
    lat = center.mapped_location.coordinates[0];
    long = center.mapped_location.coordinates[1];
  }

  return {
    name: center.facility_name,
    address: center.address,
    city: center.city,
    state: center.st,
    zip: center.zip,
    acceptedItems: accepted(
      [center.aluminum_metal_tin_cans,
      center.cardboard_newspaper_mixed_paper,
      center.glass_bottles_clear_green_brown,
      center.household_hazardous_waste,
      center.plastics,
      center.residential_brush_leaves,
      center.residential_furniture_appliances,
      center.residential_trash]
      ),
    lat: lat,
    long: long
  }
}


let formatMapper = {
  mapRecycleData: mapRecycleData,

};


module.exports = formatMapper;