angular.module('nashdrop')
  .service('resultsService', function($http){
    var result;

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

    this.passToResults = function(item){
      result = item;
    };

    this.getResults = function(){
      return result;
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
