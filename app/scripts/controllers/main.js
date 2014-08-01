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
  .controller('MainCtrl', function ($scope) {
    $scope.config = {
      strong_prefix: '#'
    };
    $scope.feeds = [
    {
      type: 'affordance',
      text: 'A #cap can be #worn like this.',
      media: [
        {
          content_type: 'image',
          url: 'images/hema/wear_frame.png'
        },
        {
          content_type: 'image',
          url: 'images/hema/wear_result.png'
        }
      ]
    },
    {
      type: 'vision',
      text: 'A #coffee #mug can be #grasped in this way.',
      media: [
        {
          content_type: 'image',
          url: 'images/ian/rectIms2/pred0389.png'
        },
        {
          content_type: 'image',
          url: 'images/ian/features/depthMesh003.png'
        },
        {
          content_type: 'image',
          url: 'images/ian/features/depthMesh002.png'
        },
        {
          content_type: 'image',
          url: 'images/ian/features/depthMesh004.png'
        }
      ]
    },
    {
      type: 'planning',
      text: 'The #watching activity between the #TV and #human is spatially distributed as follows.',
      media: [
        {
          content_type: 'image',
          url: 'images/ashesh/watching.png'
        },
        {
          content_type: 'image',
          url: 'images/ashesh/watching_heatmap.png'
        }
      ]
    },
    {
      type: 'object-usage',
      text: 'The #chair can be used like this.',
      media: [
        {
          content_type: 'image',
          url: 'images/chair/chair0000.jpg'
        },
        {
          content_type: 'image',
          url: 'images/chair/pose0.jpg'
        },
        {
          content_type: 'image',
          url: 'images/chair/pose1.jpg'
        },
        {
          content_type: 'image',
          url: 'images/chair/pose2.jpg'
        }
      ]
    },
    {
      type: 'affordance',
      text: 'A #microwave is interacted as follows for #opening.',
      media: [
        {
          content_type: 'image',
          url: 'images/hema/microwave_env.png'
        },
        {
          content_type: 'image',
          url: 'images/hema/microwave_spatial_open.png'
        }
      ]
    },
    {
      type: 'planning',
      text: 'The #interacting activity between two #humans is spatially distributed as follows.',
      media: [
        {
          content_type: 'image',
          url: 'images/ashesh/interacting.png'
        },
        {
          content_type: 'image',
          url: 'images/ashesh/interacting_heatmap.png'
        }
      ]
    },
    {
      type: '3D-detection',
      text: 'The #button of the #water #fountain can be manipulated.',
      media: [
        {
          content_type: 'image',
          url: 'images/jae/images/3a.png'
        },
        {
          content_type: 'image',
          url: 'images/jae/images/3b.png'
        },
        {
          content_type: 'image',
          url: 'images/jae/images/3c.png'
        }
      ]
    }];
    for (var i = 0; i < $scope.feeds.length; i += 1) {
      $scope.feeds[i]['text'] = $scope.feeds[i]['text'].split(' ');
    }
  });
