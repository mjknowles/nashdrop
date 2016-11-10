(function () {
  'use strict';
  angular
      .module('autocompleteDemo', ['ngMaterial'])
      .controller('SearchCtrl', searchCtrl);

  function searchCtrl ($timeout, $q, $log) {
    var self = this;

    self.simulateQuery = false;
    self.isDisabled    = false;

    // list of `state` value/display objects
    self.droppableItems        = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

    self.newState = newState;

    function newState(state) {
      alert("Sorry! You'll need to create a Constitution for " + state + " first!");
    }

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for droppableItems... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.droppableItems.filter( createFilterFor(query) ) : self.droppableItems,
          deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }

    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
      $log.info('Item changed to ' + JSON.stringify(item));
    }

    /**
     * Build `droppableItems` list of key/value pairs
     */
    function loadAll() {
      let allDroppableItems = 'aluminum,metal,tin,cardboard,mixed paper,glass,hazardous waste,plastics,brush,leaves,\
                         furniture,appliances,trash,pharmaceuticals,drugs,medicines,books,dvds,cds';
      return allDroppableItems.split(/, +/g).map( function (item) {
        return {
          value: item.toLowerCase(),
          display: item
        };
      });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(item) {
        return (item.value.indexOf(lowercaseQuery) === 0);
      };

    }
  }
})();