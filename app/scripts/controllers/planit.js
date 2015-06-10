'use strict';
angular.module('roboBrainApp')
    .controller('PlanItCtrl', ['$scope', 'FileUploader', function($scope, FileUploader) {
        

    $scope.activity_name='dancing';

    $scope.getHeatMap=function()
    {
        console.log('Clicked');
        var planitEndPoint="http://localhost:6363/planit/showHeatMap/"
        $("#wheel").addClass("spinning");
        $.getJSON(planitEndPoint, 
        {
            query: $scope.activity_name
        }, 
        function(data) 
        {
            console.log(data);
            $("#wheel").removeClass("spinning");
            var newImage = new Image();
            newImage.src = data['result'];
            document.getElementById('heatMapResult').innerHTML='<img src="'+data['result']+'" alt="Heat Map" title="Heat Map" />';


        });




    }


        var uploader = $scope.uploader = new FileUploader({
            url: 'http://localhost:6363/planit/uploadFile/'
        });

        // FILTERS

        uploader.filters.push({
            name: 'customFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
            }
        });

        // CALLBACKS

        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function(addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function(item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function(progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function(fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function() {
            console.info('onCompleteAll');
        };

        console.info('uploader', uploader);
    }]);




