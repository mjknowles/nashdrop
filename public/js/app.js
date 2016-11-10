angular.module("nashdrop", ["nemLogging", "ui.router", "ui-leaflet", "ngMaterial"])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
      .state("home", {
        controller:"homeCtrl",
        url:"/",
        templateUrl:"./js/partials/home.html"
      });

    $urlRouterProvider
      .otherwise("/");

    $locationProvider.html5Mode(true);
  });
