'use strict';
angular.module('roboBrainApp')
    .controller('PlanItCtrl', ['$scope', 'FileUploader','$rootScope','ENV','$window','$timeout', function($scope, FileUploader,$rootScope,ENV,$window,$timeout) {
    $scope.activity_name='dancing';
    $rootScope.dispWarn="";
    $rootScope.daeFile="";
    $rootScope.xmlFile="";
    $scope.loadMore=function()
    {
        document.getElementById('seemore').style.display='block';
        document.getElementById('loadmore').style.display='none';
    }
    $scope.loadedMore=function()
    {
        document.getElementById('seenmore').style.display='block';
        document.getElementById('loadedmore').style.display='none';
    }
    $scope.getHeatMap=function()
    {
        console.log('Clicked');
        var planitEndPoint=ENV.graphApiEndpoint+"planit/showHeatMap/"
        $("#wheel").addClass("spinning");
        document.getElementById('warnDisp').innerHTML='Please wait while we query the roboBrain and obtain the heatmap.'
        $.getJSON(planitEndPoint, 
        {
            query: $scope.activity_name
        }, 
        function(data) 
        {
            console.log(data);
            document.getElementById('warnDisp').innerHTML="";
            $("#wheel").removeClass("spinning");
            var newImage = new Image();
            newImage.src = data['result'];
            console.log(data['result']);
            document.getElementById('heatMapResult').innerHTML='<img src="'+data['result']+'" alt="Heat Map" height="350" title="Heat Map" />';

        });

    }




    $scope.initPoll=function ()
        {
            $window.stopcond=0;
            console.log('Initialised Polling');
            // setTimeout($scope.worker, 5000);
            $("#wheel1").addClass("spinning");
            $window.uqId=$scope.randString(10);
            $timeout($scope.worker);
        };

        $scope.worker=function () 
        {
        console.log('Polling Server');
          var planitEndPoint=ENV.graphApiEndpoint+"planit/getLog/"
          // console.log($window.uqId)
          $.getJSON(planitEndPoint, 
            {
                uqId:$window.uqId
            }, 
        function(data) 
        {
            
        // console.log(data);
        document.getElementById('consolemsg').innerHTML=data['result'][0];
        if ($window.stopcond==0)
          {
            $timeout($scope.worker, 5000);
          }
          else
          {
            console.log('Query stopped');
          }

        });

        };

        $scope.stopPoll=function()
        {
          $window.stopcond=1;
          $("#wheel1").removeClass("spinning");
        };



    $scope.getTrajectory=function()
    {
        console.log('getting trajectory');
        $scope.initPoll();
        if ($rootScope.daeFile=="" || $rootScope.xmlFile=="")
        {
            alert('Upload Files before proceeding');
             $scope.stopPoll();
            return;
        }
        var planitEndPoint=ENV.graphApiEndpoint+"planit/getTraj/"
        $.getJSON(planitEndPoint,
        {
            daeFile:$rootScope.daeFile,
            xmlFile:$rootScope.xmlFile,
            uqId:$window.uqId

        }, 
        function(data) 
        {
            $scope.stopPoll();
            console.log(data);
            document.getElementById('trajResult').innerHTML='<a href="'+data['result']+'">Click here to download the trajectory </a>';

        });

    }

    $scope.randString=function (x)
    {
    var s = "";
    while(s.length<x&&x>0){
        var r = Math.random();
        s+= (r<0.1?Math.floor(r*100):String.fromCharCode(Math.floor(r*26) + (r>0.5?97:65)));
    }
    return s;
    }

        var uploader = $scope.uploader = new FileUploader({
            url: ENV.graphApiEndpoint+'planit/uploadFile/'
        });

        // FILTERS

        uploader.filters.push({
            name: 'customFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 2;
            }
        });

        // CALLBACKS

        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
            var filename=fileItem._file.name;
            var extension=filename.split('.').pop();
            var arr=['xml','dae'];
            
            // console.log(filename,extension);
            if (arr.indexOf(extension)>-1)
            {
                console.info('Allowed');
                if ($scope.uploader.queue.length==2)
                {
                    console.log($scope.uploader.queue);
                    
                    if (($scope.uploader.queue[0]._file.name.split('.').pop()=="xml" && extension=='dae') || ($scope.uploader.queue[0]._file.name.split('.').pop()=="dae" && extension=='xml') )
                    {
                        if (extension=='dae')
                        {
                            $rootScope.daeFile=filename;
                            $rootScope.xmlFile=$scope.uploader.queue[0]._file.name;
                        }
                        else
                        {
                            $rootScope.xmlFile=filename;
                            $rootScope.daeFile=$scope.uploader.queue[0]._file.name;
                        }
                    }
                    else
                    {
                        alert('One of the files should be .dae and other .xml');
                        $scope.uploader.queue=[];
                    }
                }
            }
            else
            {
                console.log('Not allowed');
                alert('Only dae and xml files are allowed for upload');
                for (var i=0;i<$scope.uploader.queue.length;i++)
                {
                    if ($scope.uploader.queue[i]._file.name==filename);
                    {
                        $scope.uploader.queue.splice(i,1);
                        break;
                    }
                }
                console.log($scope.uploader.queue);
            }
            // console.log();
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




