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
  .controller('getFeedbackCtrl', function ($scope) {

  	$scope.currentPage=1;
    $scope.currobjlist=feedBackSystem[1];
  	$scope.range = function(min, max, step){
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) input.push(i);
    return input;
  };

$scope.captureFeedback=function(feedback)
{
	console.log($scope.currentPage)
	console.log(feedback);
	console.log();
  
  // for (var key in ) 
  // {
  //   console.log(feedBackSystem[1][key]);
  // }

	var data={'envNumber':$scope.currentPage,'NLPInstruction':feedback};
	console.log(data);
	var recordFeedbackEndPoint=ENV.graphApiEndpoint+"e2eFeedback/nlpfeedback/";
	$.getJSON(recordFeedbackEndPoint,data,
    function(response)
    {
    	console.log(response)
    });
	
}

    $scope.changeIt=function(val)
    {
    	$scope.currentPage=val;
      $scope.currobjlist=feedBackSystem[val];
    }
  });
