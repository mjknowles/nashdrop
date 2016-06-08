/* eslint-disable quotes */
angular.module('nashdrop').controller('resultsCtrl',
  [ '$scope', 'leafletData', '$location', 'leafletMarkerEvents', '$mdSidenav', 'resultsService',
  function($scope, leafletData, $location, leafletMarkerEvents, $mdSidenav, resultsService) {

    angular.extend($scope, {
      center: {
        lat: 36.16666,
        lng: -86.78333,
        zoom: 12
      },
      markers: {
        mrk1:{
          lat: 36.047628,
          lng: -86.752404,
          message: 'Granbery Elementary School'
        }
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

    $scope.addMarkers = resultsService => console.log(resultsService);

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

    $scope.results = resultsService.getResults();
  }]);
