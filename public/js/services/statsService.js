angular.module("nashdrop")
  .service("statsService", function($q, $http){
    this.getStats = () => {
      const dfd = $q.defer();
      return $http.get("http://nashdrop.herokuapp.com/stats")
      .then(function(res){
        dfd.resolve(res);
      }).catch(function(err){
        dfd.reject(err);
      });
    };
  });
