angular.module('nashdrop')
  .controller('homeCtrl', function($scope, $state, resultsService, $timeout){

    $scope.searchSubmit = function(item){
      console.log(item);
      resultsService.getItem(item).then(function(result){
        console.log(result);
        resultsService.passToResults(result.data);
        console.log(result.data, 3343434);
        $state.go('results');
      });
    };

    // $scope.watch('results', function(newVal, oldVal){
    // });

  });
