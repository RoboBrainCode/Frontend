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
  .controller('PlanItDaveCtrl', ['$scope','$cookieStore','ENV', function ($scope, $cookieStore, ENV) {
    
$scope.init=function()
{
	$scope.feeds={};
	$scope.offset=0;
	$scope.number=5;
	$scope.isScrolling = true;
	$scope.votelock=false;
	$scope.feedbackLock=false;

}    

$scope.recordFeedback=function(Feedid,feedback)
{
	// console.log(Feedid,feedback.language,feedback.planning);
	var recordFeedbackEndPoint= ENV.graphApiEndpoint+"e2eFeedback/recordFeedback/"
	var data={'feedid':Feedid,'tellmedave':feedback.language,'planit':feedback.planning};
	
	if ($scope.feedbackLock)
	{
		return
	}

	feedback.language="";
	feedback.planning="";

    $.getJSON(recordFeedbackEndPoint,data,
    function(response)
    {
    	console.log(response)
    });


}


$scope.vote=function(Feedid,voteVal)
{
        var upvotesEndpoint = ENV.graphApiEndpoint+"e2eFeedback/upVote/";
        var change = false;
        if ($scope.votelock) 
        {
          return;
        }
        // If a vote has already be made, only register it if it's a change vote
        if ($cookieStore.get(Feedid)) 
        {
          if ($cookieStore.get(Feedid) == voteVal) {
            return;
          } else {
            change = true;
          }
        }
        $scope.votelock = true;

        var data={'feedid':Feedid,'vote':voteVal,'change':change}
        $.getJSON(upvotesEndpoint,data,
        function(response)
        {
          console.log(response)
          console.log(voteVal)
          $cookieStore.put(Feedid, voteVal);
          if (voteVal == 1) 
          {
            $scope.feeds[Feedid]['upvoted'] = true
            $scope.feeds[Feedid]['downvoted'] = false
          } else if (voteVal == -1) 
          {
            $scope.feeds[Feedid]['upvoted'] = false
            $scope.feeds[Feedid]['downvoted'] = true
          }
          $scope.feeds[Feedid]['upvotes'] = response.upvotes;
          $scope.feeds[Feedid]['downvotes'] =response.downvotes;
          $scope.votelock = false;
          $scope.$apply();
        });
        
          
 };



$scope.loadFeedback=function()
 	{
  		console.log('Triggered Feedback');
 		var feed_endpoint = ENV.graphApiEndpoint+'e2eFeedback/getMoreFeeds/';
        var isScrolling=$scope.isScrolling
        if (isScrolling) 
        {
          isScrolling = false;
          // var val = $cookies.csrftoken;
          // if (!val) {
          //   $http.get(upvotesEndpoint);
          // }
	        var data = {'num':$scope.number,'current':$scope.offset};
	      	$.getJSON(
	      			feed_endpoint,
	      			data,
	      			function(data) 
			        {
						for (var k = 0; k < data.length; ++k) 
						{
							var feed_id = data[k]['_id'];
							$scope.feeds[feed_id] = data[k];
							$scope.feeds[feed_id]['order'] = $scope.offset;
							$scope.offset += 1;

							if ($cookieStore.get(feed_id) == 1) 
							{
								$scope.feeds[feed_id]['upvoted'] = true;
							} 
							else if ($cookieStore.get(feed_id) == -1) 
							{
								$scope.feeds[feed_id]['downvoted'] = true;
							}
						}
		            isScrolling = true;
		            
			        }); 
	      }
 	}


  			


  }]);
