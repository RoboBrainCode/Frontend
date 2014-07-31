'use strict';

/**
 * @ngdoc function
 * @name roboBrainApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the roboBrainApp
 */
angular.module('roboBrainApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.sponsors = [
    {
      name: 'National Science Foundation',
      logo: 'images/sponsors/nsf.jpg',
      url: 'http://www.nsf.gov/'
    },
    {
      name: 'Office of Naval Research',
      logo: 'images/sponsors/onr.jpg',
      url: 'http://www.onr.navy.mil/'
    },
    {
      name: 'Army Research Office',
      logo: 'images/sponsors/aro.jpg',
      url: 'http://www.nsf.gov/'
    },
    {
      name: 'Google',
      logo: 'images/sponsors/goog.jpg',
      url: 'http://www.google.com/'
    },
    {
      name: 'Microsoft',
      logo: 'images/sponsors/msft.jpg',
      url: 'http://www.microsoft.com/'
    },
    {
      name: 'Alfred P. Sloan Foundation',
      logo: 'images/sponsors/apsf.jpg',
      url: 'http://www.sloan.org/'
    },
    {
      name: 'Qualcomm',
      logo: 'images/sponsors/qcom.jpg',
      url: 'http://www.qualcomm.com/'
    },
    {
      name: 'Cornell University',
      logo: 'images/sponsors/cornell.jpg',
      url: 'http://www.cornell.edu/'
    },
    {
      name: 'Stanford University',
      logo: 'images/sponsors/stanford.jpg',
      url: 'http://www.stanford.edu/'
    },
    {
      name: 'UC Berkeley',
      logo: 'images/sponsors/berkeley.jpg',
      url: 'http://www.berkeley.edu/'
    },
    {
      name: 'Brown University',
      logo: 'images/sponsors/brown.jpg',
      url: 'http://www.brown.edu/'
    }];
  });