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
  .controller('ApplicationCtrl', '$scope',function ($scope) {
    // $scope.feeds = brainFeeds.init();

    $scope.sendQuery = function(query) 
  	{
  	  var raquelEndPoint = ENV.apiEndpoint + 'raquel/rachQuery/';
      $.getJSON(raquelEndPoint, 
        {
            query: query.query,
        }, 
        function(data) 
        {

                 var jsonVar=data['result'];
//		 document.getElementById('regeStr').innerHTML = data['result'];
                 var jsonStr = JSON.stringify(jsonVar);
                 var regeStr = '';
                 var f = {
                          brace: 0
                      }; // for tracking matches, in particular the curly braces

                  regeStr = jsonStr.replace(/({|}[,]*|[^{}:]+:[^{}:,]*[,{]*)/g, function (m, p1) {
                    var rtnFn = function() {
                              return '<div style="text-indent: ' + (f['brace'] * 20) + 'px;">' + p1 + '</div>';
                          },
                          rtnStr = 0;
                      if (p1.lastIndexOf('{') === (p1.length - 1)) {
                          rtnStr = rtnFn();
                          f['brace'] += 1;
                      } else if (p1.indexOf('}') === 0) {
                          f['brace'] -= 1;
                          rtnStr = rtnFn();
                      } else {
                          rtnStr = rtnFn();
                      }
                      return rtnStr;
                  });

              document.getElementById('regeStr').innerHTML = regeStr;
              return false;
        });



  	};

  	$scope.query={};


  });
