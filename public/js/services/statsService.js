angular.module('nashdrop')
  .service('statsService', function($q, $http){
    this.getStats = function(stats){
      var dfd = q.defer();
      return $http({
        method:"GET",
        url:"http://nashdrop.herokuapp.com/stats"
      }).then(function(res){
        dfd.resolve(res);
      }).catch(function(err){
        dfd.reject(err);
      });
    };
    return dfd.promise;
  });
