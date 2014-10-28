'use strict';

/**
 * @ngdoc function
 * @name roboBrainApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the roboBrainApp
 * Note: Feed type must be one of: affordance, vision, planning, object-usage, 3D-detection
 * Media content type must be one of: image
 */
angular.module('roboBrainApp')
  .controller('MainCtrl', ['$scope', 'brainFeeds', function ($scope, brainFeeds, ENV) {
    brainFeeds.init();
    $scope.feeds = brainFeeds.init();
    $scope.moreRecent = brainFeeds.moreRecent;
    $scope.vote = brainFeeds.vote;
    $scope.loadComments = brainFeeds.loadComments;

    $scope.hasSearched = false;
    $scope.searchGraph = function(){
    	$scope.hasSearched = true;
    	var input = $scope.searchText;
    	console.log(input);

    	//var output = answerQuestion(input);
    	//console.log(output);

    }

  }]);
