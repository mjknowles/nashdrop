angular.module('nashdrop')
  .service('resultsService', function($q, $http){

    this.getDropoffLocation = function(location){
      return $http({
        method:"GET",
        url:"http://nashdrop.herokuapp.com/search/"
      });
    };


    this.getItem = function(item){
      console.log(item);
      return $http({
        method:"GET",
        url:"http://nashdrop.herokuapp.com/search/"+item
      });
    };

  //   this.getSearchedItem = function(item){
  //     $http({
  //       method:"GET",
  //       url:"http://nashdrop.herokuapp.com/search/" + item
  //     }).then(function(res){
  //       console.log(item);
  //       }
  //     ).catch(function(err){
  //       console.log(err);
  //     });
  //   };
  });
