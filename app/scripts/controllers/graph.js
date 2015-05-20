'use strict';

/**
 * @ngdoc function
 * @name roboBrainApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller to query the knowledge graph
 */
angular.module('roboBrainApp')
  .controller('GraphCtrl', ['$scope', '$http','ENV', function ($scope, $http, ENV) {
  	$scope.weaverGraph = function(weaver) 
  	{
  		var weaverGraphEndpoint = ENV.apiEndpoint + 'graph/getNode/';

  		  $("#wheel").addClass("spinning");
          $.getJSON(weaverGraphEndpoint, 
            {
                query: weaver.query,
                number: weaver.limit,
                overwrite:'1',
                directionVal: weaver.direction
            }, 
            function(data) 
            {
                $("#wheel").removeClass("spinning");
                $scope.renderAlchemy()
                return false;
            });



  	};

	$scope.renderAlchemy=function()
	{
	    var config = 
	         {
	            dataSource: "sample_data/arctic.json",
	            nodeStyle: 
	            {
	                "all": 
	                    {
	                        "borderColor": "#127DC1",
	                        "borderWidth": function(d, radius) 
	                        {
	                            return radius / 4
	                        },
	                        "color": function(d) 
	                        { 
	                            // return "rgba(135, 206, 250, " + 
	                            // (d.getProperties().memoryUsage / 100) + " )"
	                            return "rgb(135, 206, 250)"  

	                        }, 
	                        "radius": function(d) 
	                        {
	                            if(d.getProperties().root)
	                            return 25; else return 20
	                        }, 

	                        "captionColor": "#000000",
	                        "captionBackground": null,
	                        "captionSize": 20,
	                        "highlighted": {
	                            "color" : "#1FBED6"
	                        },
	                    }

	            } }
	            var alchemy = new Alchemy(config);
	};

	$scope.addMoreNodes=function(nodename)
	{
		var weaverGraphEndpoint = ENV.apiEndpoint + 'graph/getNode/';
		$.getJSON(weaverGraphEndpoint, 
	    {
	        query: nodename,
	        number: document.getElementById('number').value,
	        overwrite:'0',
	        directionVal:document.getElementById('directionVal').value
	    },function(data) 
	    {
	    	$scope.renderAlchemy();
	    });
	};

  	$scope.weaver={}

  }]);
