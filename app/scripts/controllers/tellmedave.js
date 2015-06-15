'use strict';
angular.module('roboBrainApp')
    .controller('tellmedaveCtrl', ['$scope', function($scope) {
        

    
    $scope.loadMore=function()
    {
        document.getElementById('seemore').style.display='block';
        document.getElementById('loadmore').style.display='none';
    }
    }]);




