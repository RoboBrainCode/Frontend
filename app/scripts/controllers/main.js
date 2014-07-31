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
      timeText: 'Just now',
      location: 'Palo Alto, CA',
      likes: '223',
      comments: '12',
      views: '670',
      media: [
        {
          contentType: 'image',
          url: 'images/feed/hema/wear_frame.png'
        },
        {
          contentType: 'image',
          url: 'images/feed/hema/wear_result.png'
        }
      ]
    },
    {
      type: 'vision',
      text: 'A #coffee #mug can be #grasped in this way.',
      timeText: 'A minute ago',
      location: 'Honolulu, HI',
      likes: '80',
      comments: '2',
      views: '230',
      media: [
        {
          contentType: 'image',
          url: 'images/feed/ian/rectIms2/pred0389.png'
        },
        {
          contentType: 'image',
          url: 'images/feed/ian/features/depthMesh003.png'
        },
        {
          contentType: 'image',
          url: 'images/feed/ian/features/depthMesh002.png'
        },
        {
          contentType: 'image',
          url: 'images/feed/ian/features/depthMesh004.png'
        }
      ]
    },
    {
      type: 'planning',
      text: 'The #watching activity between the #TV and #human is spatially distributed as follows.',
      timeText: '5 minutes ago',
      location: 'Ithaca, NY',
      likes: '130',
      comments: '15',
      views: '442',
      media: [
        {
          contentType: 'image',
          url: 'images/feed/ashesh/watching.png'
        },
        {
          contentType: 'image',
          url: 'images/feed/ashesh/watching_heatmap.png'
        }
      ]
    },
    {
      type: 'object-usage',
      text: 'The #chair can be used like this.',
      timeText: '15 minutes ago',
      location: 'New York, NY',
      likes: '140',
      comments: '55',
      views: '342',
      media: [
        {
          contentType: 'image',
          url: 'images/feed/yun/chair/chair0000.jpg'
        },
        {
          contentType: 'image',
          url: 'images/feed/yun/chair/pose0.jpg'
        },
        {
          contentType: 'image',
          url: 'images/feed/yun/chair/pose1.jpg'
        },
        {
          contentType: 'image',
          url: 'images/feed/yun/chair/pose2.jpg'
        }
      ]
    },
    {
      type: 'affordance',
      text: 'A #microwave is interacted as follows for #opening.',
      timeText: '22 minutes ago',
      location: 'Mountain View, CA',
      likes: '39',
      comments: '5',
      views: '90',
      media: [
        {
          contentType: 'image',
          url: 'images/feed/hema/microwave_env.png'
        },
        {
          contentType: 'image',
          url: 'images/feed/hema/microwave_spatial_open.png'
        }
      ]
    },
    {
      type: 'planning',
      text: 'The #interacting activity between two #humans is spatially distributed as follows.',
      timeText: '25 minutes ago',
      location: 'Ithaca, NY',
      likes: '160',
      comments: '35',
      views: '542',
      media: [
        {
          contentType: 'image',
          url: 'images/feed/ashesh/interacting.png'
        },
        {
          contentType: 'image',
          url: 'images/feed/ashesh/interacting_heatmap.png'
        }
      ]
    },
    {
      type: '3D-detection',
      text: 'The #button of the #water #fountain can be manipulated.',
      timeText: '1 hour ago',
      location: 'Ithaca, NY',
      likes: '40',
      comments: '32',
      views: '122',
      media: [
        {
          contentType: 'image',
          url: 'images/feed/jae/images/3a.png'
        },
        {
          contentType: 'image',
          url: 'images/feed/jae/images/3b.png'
        },
        {
          contentType: 'image',
          url: 'images/feed/jae/images/3c.png'
        }
      ]
    }];
    for (var i = 0; i < $scope.feeds.length; i += 1) {
      $scope.feeds[i]['text'] = $scope.feeds[i]['text'].split(' ');
    }
  });
