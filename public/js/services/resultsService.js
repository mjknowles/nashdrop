angular.module('nashdrop')
  .service('resultsService', function($q, $http){

    this.getDropoffLocation = function(location){
      return $http({
        method:"GET",
        url:"http://nashdrop.herokuapp.com/search/"
      });
    };

<<<<<<< HEAD
    this.getItem = function(item){
      console.log(item);
      return $http({
        method:"GET",
        url:"http://nashdrop.herokuapp.com/search/"+item
      });
    };
=======
    this.getSearchedItem = function(item){
      $http({
        method:"GET",
        url:"http://nashdrop.herokuapp.com/search/" + item
      }).then(function(res){
        console.log(item);
        }
      ).catch(function(err){
        console.log(err);
      });
    };

>>>>>>> e86900224a91c2e50316b805b390e23a1e2ff9f4
  });
