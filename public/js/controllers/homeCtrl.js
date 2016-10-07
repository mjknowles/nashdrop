/* eslint-disable quotes */
angular.module('nashdrop').controller('homeCtrl',
  [ '$scope', 
  'leafletData', 
  '$location', 
  'leafletMarkerEvents', 
  '$mdSidenav', 
  '$http',
  
  function($scope, leafletData, $location, leafletMarkerEvents, $mdSidenav, $http) {

    angular.extend($scope, {
      center: {
        lat: 36.16666,
        lng: -86.78333,
        zoom: 12
      },
      markers: {
        // assuming this was here to test putting a pin in the map
        //mrk1:{
          //lat: 36.047628,
          //lng: -86.752404,
          //message: 'Granbery Elementary School'
        //}
      },
      defaults: {
        scrollWheelZoom: false
      },
      events: {
        map: {
          enable: ['click'],
          logic: 'emit'
        }
      },
      layers: {
        baselayers: {
          mapbox_streets: {
            name: 'Mapbox Streets',
            url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
            type: 'xyz',
            layerOptions: {
              apikey: 'pk.eyJ1IjoibHJvdXNlIiwiYSI6ImNpaHBnYmkxaDA0NGJ0c20yMG5sMmZlenIifQ.NVpXXlzfBCtK00m36zp68Q',
              mapid: 'mapbox.streets'
            }
          },
          osm: {
            name: 'OpenStreetMap',
            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            type: 'xyz'
          }
        }
      }
    });

    $scope.searchSubmit = item => {
      $http.get('http://nashdrop.herokuapp.com/search/' + item)
      .then(response => 
      {
        $scope.results = response.data;
              $scope.results.forEach((res, _i) => {
          // the lat and lng values are validated by the leaflet directive, so
          // we ditch falsies and do a parseFloat so they pass muster
          // TODO this means we don't have a complete set of map pins
          // corresponding to the search result
          if (!res.lat || !res.long) return;

          $scope.markers[res.address] = {
              lat: parseFloat(res.lat),
              lng: parseFloat(res.long),
              message: "<b>" + res.name  + "</b>" // TODO bleah html munging
                  + "<br />"
                  + res.address
          }
        });
      });
    };

    // SIDENAV CODE
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = () => $mdSidenav('right').isOpen();

    function buildToggler(navID) {
      return () => {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug(`toggle ${navID} is done`);
          });
      };
    }
  }]);
