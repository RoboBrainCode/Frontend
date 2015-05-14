'use strict';

/**
 * @ngdoc function
 * @name roboBrainApp.controller:QueryCtrl
 * @description
 * # QueryCtrl
 * Controller of the roboBrainApp
 * Note: Feed type must be one of: affordance, vision, planning, object-usage, 3D-detection
 * Media content type must be one of: image
 */
angular.module('roboBrainApp')
  .controller('RaquelCtrl', function ($scope) {
    $scope.feeds = brainFeeds.init();
  });
