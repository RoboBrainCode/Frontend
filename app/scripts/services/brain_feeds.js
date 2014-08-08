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
            feeds[i]['media'][j] = ENV.staticEndpoint + feeds[i]['media'][j]
          }
        }
      }
    }, function() {
      // if error occurs, use placeholders
      var placeholders = [
      {
        type: 'affordance',
        text: 'A #cap can be #worn like this.',
        media: [
          'images/hema/wear_frame.png',
          'images/hema/wear_result.png'
        ]
      },
      {
        type: 'vision',
        text: 'A #coffee #mug can be #grasped in this way.',
        views: '230',
        media: [
          'images/rectIms2/pred0389.png',
          'images/features/depthMesh003.png',
          'images/features/depthMesh002.png',
          'images/features/depthMesh004.png'
        ]
      },
      {
        type: 'planning',
        text: 'The #watching activity between the #TV and #human is spatially distributed as follows.',
        media: [
          'images/ashesh/watching.png',
          'images/ashesh/watching_heatmap.png'
        ]
      },
      {
        type: 'object-usage',
        text: 'The #chair can be used like this.',
        media: [
          'images/chair/chair0000.jpg',
          'images/chair/pose0.jpg',
          'images/chair/pose1.jpg',
          'images/chair/pose2.jpg'
        ]
      },
      {
        type: 'affordance',
        text: 'A #microwave is interacted as follows for #opening.',
        media: [
          'images/hema/microwave_env.png',
          'images/hema/microwave_spatial_open.png'
        ]
      },
      {
        type: 'planning',
        text: 'The #interacting activity between two #humans is spatially distributed as follows.',
        media: [
          'images/ashesh/interacting.png',
          'images/ashesh/interacting_heatmap.png'
        ]
      },
      {
        type: '3D-detection',
        text: 'The #button of the #water #fountain can be manipulated.',
        media: [
          'images/jae/3a.png',
          'images/jae/3b.png',
          'images/jae/3c.png'
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
                feeds[i]['media'][j] = ENV.staticEndpoint + feeds[i]['media'][j]
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
                data[i]['media'][j] = ENV.staticEndpoint + data[i]['media'][j]
              }
            }
          }
          return data;
        });
      }
    };
  }]);