angular.module('nashdrop', ['ui.router'])

  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state("home", {
        controller:"homeCtrl",
        url:"/",
        templateUrl:"./js/partials/homeView.html"
      })

      .state("stats", {
        controller:"statsCtrl",
        url:"/stats",
        templateUrl:"./js/partials/stats.html"
      })

      .state("results", {
        controller:"resultCtrl",
        url:"/results",
        templateUrl:"./js/partials/results.html"
      });

      $urlRouterProvider
        .otherwise("/");
  });
