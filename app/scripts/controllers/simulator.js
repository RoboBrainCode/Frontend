'use strict';

/**
 * @ngdoc function
 * @name roboBrainApp.controller:SimulatorCtrl
 * @description
 * # SimulatorCtrl
 * Controller of the roboBrainApp
 */
angular.module('roboBrainApp')
  .controller('SimulatorCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.url = $routeParams.url;
    $scope.sequence = $routeParams.seq.split(',');
  }]);
