app.controller('resultsCtrl', [ '$scope', 'resultsService', 'leafletData', '$location', 'leafletMarkerEvents', '$mdSidenav', function($scope, leafletData, $location, leafletMarkerEvents, $mdSidenav) {

// angular.element(document).ready(function () {
//     console.log('page loading completed');
// });

    $scope.marks = [];
    var searchMarks = resultsService.getSearchedItem();
    console.log('searchMarks ', searchMarks);

    angular.extend($scope, {
      nash: {
        lat: 36.16666,
        lng: -86.78333,
        zoom: 12,
      },
      defaults: {
        scrollWheelZoom: false
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

    $scope.addMarkers = function() {
      console.log("add clicked")
      angular.extend($scope, {
        markers: {
          m1: {
            lat: 51.505,
            lng: -0.09,
            message: "I'm a static marker",
          },
          m2: {
            lat: 51,
            lng: 0,
            focus: true,
            message: "Hey, drag me if you want",
            draggable: true
          }
        }
      });
      return leafletData;
    };

    $scope.addMarkers = function(resultsService){
      console.log(resultsService);
      // return firebaseMarks.$add({
      //   lat: args.leafletEvent.latlng.lat,
      //   lng: args.leafletEvent.latlng.lng,
      //   uid: $scope.userAuth.uid,
      //   dateAdded: Date.now(),
      //   icon: local_icons.leaf_icon,
      //   opacity: 0.6,
      //   name: "",
      //   description: "",
      //   votes: 0,
      //   images: "",
      //   editable: true,
      });
    };

    firebaseMarks.$loaded()
      .then(function(){
        angular.forEach(firebaseMarks, function(mark) {
          if (mark.uid === $scope.userAuth.uid ){
            mark.editable = true;
            mark.voting = false;
          } else {
            mark.editable = false;
            mark.voting = true;
          }
          $scope.marks.push(mark);
          // console.log("these are the marks on the map, ", mark);
          });
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

}]);

