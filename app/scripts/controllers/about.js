'use strict';

/**
 * @ngdoc function
 * @name roboBrainApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the roboBrainApp
 */
angular.module('roboBrainApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
