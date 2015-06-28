'use strict';
angular.module('roboBrainApp')
    .controller('tellmedaveCtrl', ['$scope', function($scope) {
        

    
    $scope.loadMore=function()
    {
        document.getElementById('seenmore').style.display='block';
        document.getElementById('loadedmore').style.display='none';
    }
    }]);




