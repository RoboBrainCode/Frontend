//inject angular file upload directives and services.
var app = angular.module('fileUpload', ['ngFileUpload']);

app.controller('MyCtrl', ['$scope', 'Upload', function ($scope, Upload) {
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });
    $scope.log = '';

    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                Upload.upload({
                    url: 'http://localhost:6363/planit/uploadFile/',
                    fields: {
                        'username': $scope.username
                    },
                    file: file,
                    // headers: {'Content-type': 'text/xml;charset="utf-8"','Accept': 'text/xml'}, // only for html5
                    // headers: {"Content-type: text/xml;charset=\"utf-8\"","Accept: text/xml","Cache-Control: no-cache","Pragma: no-cache"}, // only for html5
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.log = 'progress: ' + progressPercentage + '% ' +
                                evt.config.file.name + '\n' + $scope.log;
                }).success(function (data, status, headers, config) {
                    $scope.log = 'file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data) + '\n' + $scope.log;
                    $scope.$apply();
                });
            }
        }
    };
}]);