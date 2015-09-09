'use strict';

/**
 * @ngdoc overview
 * @name roboBrainApp
 * @description
 * # roboBrainApp
 *
 * Main module of the application.
 */
angular
  .module('roboBrainApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'infinite-scroll',
    'config',
    'angularFileUpload'
  ])
  .config(['$routeProvider', '$locationProvider', '$sceProvider', function ($routeProvider, $locationProvider, $sceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/graph', {
        templateUrl: 'views/weaverGraph.html',
        controller: 'GraphCtrl'
      })
      .when('/query', {
        templateUrl: 'views/main.html',
        controller: 'QueryCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/research', {
        templateUrl: 'views/research.html',
        controller: 'ResearchCtrl'
      })
      .when('/api', {
        templateUrl: 'views/api.html',
        controller: 'APICtrl'
      })
      .when('/application', {
          templateUrl: 'views/application.html',
	    controller: 'RaquelCtrl'
      })
      .when('/raquel', {
          templateUrl: 'views/raquel.html',
        controller: 'RaquelCtrl'
      })
      .when('/people', {
        templateUrl: 'views/people.html',
        controller: 'PeopleCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/createuser', {
        templateUrl: 'views/createuser.html',
        controller: 'LoginCtrl'
      })
      .when('/raquel', {
        templateUrl: 'views/raquel.html',
        controller: 'RaquelCtrl'
      })
      .when('/planit', {
        templateUrl: 'views/planit.html',
        controller: 'PlanItCtrl'
      })
      .when('/planitDave', {
        templateUrl: 'views/planitDave.html',
        controller: 'PlanItDaveCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $sceProvider.enabled(false);
  }]);
