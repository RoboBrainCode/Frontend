angular
  .module('roboBrainApp')
  .factory('brainFeeds', ['$resource', '$interval', 'ENV', function($resource, $interval, ENV) {
    // initialize with k most recent feeds
    var feeds = [];
    var feedSize = 20;
    $resource(ENV.apiEndpoint + 'feed/most_recent', { k: feedSize, callback: 'JSON_CALLBACK' },
      { get: { method: 'JSONP', isArray: true } }).get().$promise
      .then(function(data) {
      for (var i = 0; i < data.length; ++i) {
        feeds.push(data[i]);
        feeds[i]['text'] = feeds[i]['text'].split(' ');
        if (ENV.staticEndpoint) {
          for (var j = 0; j < feeds[i]['media'].length; ++j) {
            feeds[i]['media'][j]['url'] = ENV.staticEndpoint + feeds[i]['media'][j]['url'];
          }
        }
      }
    }, function() {
      // if error occurs, use placeholders
      var placeholders = [
      {
        type: 'language',
        text: 'Heat the coffee inside the microwave. Add in ice cream and syrup.',
        media: [
          {
            type: 'ccb_simulator',
            url: 'copperlichtdata/kitchen6.ccbjs',
            sequence: ['moveTo mug1', 'grasp mug1']
          }
        ]
      },
      {
        type: 'affordance',
        text: 'A #cap can be #worn like this.',
        media: [
          {
            type: 'image',
            url: 'images/hema/wear_frame.png'
          },
          {
            type: 'image',
            url: 'images/hema/wear_result.png'
          }
        ]
      },
      {
        type: 'vision',
        text: 'A #coffee #mug can be #grasped in this way.',
        views: '230',
        media: [
          {
            type: 'image',
            url: 'images/rectIms2/pred0389.png'
          },
          {
            type: 'image',
            url: 'images/features/depthMesh003.png'
          },
          {
            type: 'image',
            url: 'images/features/depthMesh002.png'
          },
          {
            type: 'image',
            url: 'images/features/depthMesh004.png'
          }
        ]
      },
      {
        type: 'planning',
        text: 'The #watching activity between the #TV and #human is spatially distributed as follows.',
        media: [
          {
            type: 'image',
            url: 'images/ashesh/watching.png'
          },
          {
            type: 'image',
            url: 'images/ashesh/watching_heatmap.png'
          }
        ]
      },
      {
        type: 'object-usage',
        text: 'The #chair can be used like this.',
        media: [
          {
            type: 'image',
            url: 'images/chair/chair0000.jpg'
          },
          {
            type: 'image',
            url: 'images/chair/pose0.jpg'
          },
          {
            type: 'image',
            url: 'images/chair/pose1.jpg'
          },
          {
            type: 'image',
            url: 'images/chair/pose2.jpg'
          }
        ]
      },
      {
        type: 'affordance',
        text: 'A #microwave is interacted as follows for #opening.',
        media: [
          {
            type: 'image',
            url: 'images/hema/microwave_env.png'
          },
          {
            type: 'image',
            url: 'images/hema/microwave_spatial_open.png'
          }
        ]
      },
      {
        type: 'planning',
        text: 'The #interacting activity between two #humans is spatially distributed as follows.',
        media: [
          {
            type: 'image',
            url: 'images/ashesh/interacting.png'
          },
          {
            type: 'image',
            url: 'images/ashesh/interacting_heatmap.png'
          }
        ]
      },
      {
        type: '3D-detection',
        text: 'The #button of the #water #fountain can be manipulated.',
        media: [
          {
            type: 'image',
            url: 'images/jae/3a.png'
          },
          {
            type: 'image',
            url: 'images/jae/3b.png'
          },
          {
            type: 'image',
            url: 'images/jae/3c.png'
          }
        ]
      }];
      for (var i = 0; i < placeholders.length; ++i) {
        feeds.push(placeholders[i]);
        feeds[i]['text'] = feeds[i]['text'].split(' ');
      }
    });
    // update array once per minute
    var lastUpdate = new Date();
    var updateLoop = $interval(function() {
      $resource(ENV.apiEndpoint + 'feed/since', { datetime: lastUpdate, callback: 'JSON_CALLBACK' },
        { get: { method: 'JSONP', isArray: true } }).get().$promise
        .then(function(data) {
          lastUpdate = new Date();
          // prepend new feeds, then shrink down to previous size
          for (var i = data.length - 1; i >= 0; --i) {
            feeds.unshift(data[i]);
            feeds[0]['text'] = feeds[0]['text'].split(' ');
            if (ENV.staticEndpoint) {
            for (var j = 0; j < data[i]['media'].length; ++j) {
                feeds[i]['media'][j]['url'] = ENV.staticEndpoint + feeds[i]['media'][j]['url']
              }
            }
          }
          for (var i = feeds.length; i > feedSize; --i) {
            feeds.pop();
          }
        }, function() {
          $interval.cancel(updateLoop);
        });
      
    }, 60000);
    return {
      mostRecent: function() { return feeds; },
      query: function(q) {
        q['callback'] = 'JSON_CALLBACK';
        $resource(ENV.apiEndpoint + 'feed/query', q, { get: { method: 'JSONP', isArray: true } }).get().$promise
        .then(function(data) {
          for (var i = 0; i < data.length; ++i) {
            data[i]['text'] = data[i]['text'].split(' ');
            if (ENV.staticEndpoint) {
            for (var j = 0; j < data[i]['media'].length; ++j) {
                data[i]['media'][j]['url'] = ENV.staticEndpoint + data[i]['media'][j]['url']
              }
            }
          }
          return data;
        });
      }
    };
  }]);