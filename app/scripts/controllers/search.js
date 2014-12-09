'use strict';

/**
 * @ngdoc function
 * @name roboBrainApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller to query the knowledge graph
 */
angular.module('roboBrainApp')
  .config(function($httpProvider){
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
  })
  /*.config('SearchCtrl',[]).config(function($sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist([
                // Allow same origin resource loads.
                     'self',
                // Allow loading from our assets domain.  Notice the difference between * and **.
                    'http://graphtest.robobrain.me:3000/graph_query/nlquery/**'
                                  ]);})*/
  .controller('SearchCtrl', ['$scope', '$http', function ($scope, $http,  ENV) {

    var search_endpoint = "http://graphtest.robobrain.me:3000/graph_query/nlquery/";
    $scope.hasSearched = false;
    $scope.hasAnswered = false;
    $scope.hasError = false;
    $scope.searchGraph = function(){
        $scope.hasAnswered = false;
        $scope.hasError = false;
        $scope.hasSearched = true;
       // $httpProvider.defaults.withCredentials = true;
        var input = $scope.inputText;
        $scope.inputText = "";
        $scope.originalText = input;
        alert("Intput is "+input);
        $http.get(search_endpoint, {
            params: {
                user_in: input,
            }
        }).success(function(data, status) {
            //console.log("SUCCESS");
            //console.log(data);
            alert("Success");
            //alert(data);
            $scope.outputText = data[0].user_out;
            $scope.hasSearched = false;
            $scope.hasAnswered = true;
        })
        .error(function(data, status) {
            //console.log("ERROR");
            alert("Error "+status+" "+data);
            $scope.hasSearched = false;
            $scope.hasError = true;
        });
    }

  }]);
