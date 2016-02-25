'use strict';

// Declare app module 
var app = angular.module('forecastApp',[
        'ngAnimate',
        'ngRoute',
        'forecastAppServices',
        'forecastAppControllers',
        'forecastAppDirectives',
        'forecastDataFilters'
    ])
    .value('mode', 'app')
    .value('version', 'v0.0.1');

app.config( function ($routeProvider, $locationProvider)
    {
   
        $routeProvider
        .when("/",
        {
            templateUrl: "views/wetter.html",
            controller: "MainCtrl"
        }).when("/impressum",
        {
            templateUrl: "views/impressum.html",
            controller: "MainCtrl"
        }).when("/readme",
        {
            templateUrl: "views/readme.html",
            controller: "MainCtrl"
        }).otherwise({
            redirectTo: '/'
        });
        
    }).controller('MainCtrl', ['$route', '$routeParams', '$location',
        function($route, $routeParams, $location) {
          this.$route = $route;
          this.$location = $location;
          this.$routeParams = $routeParams;
}]);

/*
 * Fallback Configuration: Using private setters for ServiceProvider
 * Deprecated. Use external config.json instead;
 ***/
app.config( function (weatherServiceProvider){
    weatherServiceProvider.setApiKey('123456789......');
    weatherServiceProvider.setUnits('ca');
    weatherServiceProvider.setLang('en');
});
  

