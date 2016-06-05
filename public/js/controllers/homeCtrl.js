angular.module('nashdrop')
  .controller('homeCtrl', function($scope, $state, resultsService){

    $scope.searchSubmit = function(item){
      console.log(item);
      resultsService.getItem(item).then(function(result){
        console.log(result);
        $scope.results = result.data;
        $state.go('results');
      });
    };
  });
