'use strict';

/**
 * @ngdoc function
 * @name roboBrainApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller to query the knowledge graph
 */
angular.module('roboBrainApp')
  .controller('SearchCtrl', ['$scope', function ($scope, ENV) {

    $scope.hasSearched = false;
    $scope.searchGraph = function(){
    	var input = $scope.inputText;
        $scope.inputText = "";
        
        $scope.originalText = input;

        $scope.hasSearched = true;
        
    }

  }]);
