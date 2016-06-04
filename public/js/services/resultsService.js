angular.module('nashdrop')
  .service('resultsService', function($q, $http){

    this.getDropoffLocation = function(location){
      return $http({
        method:"GET",
        url:"http://nashdrop.herokuapp.com/search/"
      });
    };

    this.getSearchedItem = function(item){
      var dfd = $q.defer();
      return $http({
        method:"GET",
        url:"http://nashdrop.herokuapp.com/search/" + item
      }).then(function(res){
        dfd.resolve(res);
        }
      ).catch(function(err){
        dfd.reject(err);
      });
    };
    return dfd.promise;
  });
