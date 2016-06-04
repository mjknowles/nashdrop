(function () {

  'use strict';

  function resultsCtrl ($scope, leafletData, $location, leafletMarkerEvents, $mdSidenav) {

    angular.extend($scope, {
      center: {
        lat: 36.16666,
        lng: -86.78333,
        zoom: 12,
      },
      defaults: {
        scrollWheelZoom: false
      },
      controls: {
        scale: true
      },
      events: {
        map: {
          enable: ['click'],
          logic: 'emit'
        },
        markers: {
          enable: leafletMarkerEvents.getAvailableEvents(),
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
      },
      userMarks: $scope.marks
    });

// SIDENAV CODE
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };

    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      };
    }

  }

  angular
    .module('nashdrop')
    .controller('resultsCtrl', resultsCtrl);

})();
