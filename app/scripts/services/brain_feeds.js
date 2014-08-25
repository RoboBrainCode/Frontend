angular
  .module('roboBrainApp')
  .factory('brainFeeds', ['$resource', '$interval', 'ENV', function($resource, $interval, ENV) {
    // initialize with k most recent feeds
    var feeds = [];
    var feedIds = [];
    var feedSize = 20;
    return {
      init: function() {
        $resource(ENV.apiEndpoint + 'feed/most_recent', { k: feedSize, callback: 'JSON_CALLBACK' },
          { get: { method: 'JSONP', isArray: true } }).get().$promise
          .then(function(data) {
          for (var i = 0; i < data.length; ++i) {
            feedIds.push(data[i]['_id']['$oid']);
            feeds.push(data[i]);
            feeds[i]['text'] = feeds[i]['text'].split(' ');
            for (var j = 0; j < feeds[i]['media'].length; ++j) {
              // Bundle tellmedave robot sequence with simulator url
              if (feeds[i]['media'][j].match(/\.(gif|jpg|jpeg|tiff|png)$/i)) {
                feeds[i]['media'][j] = {
                  type: 'image',
                  url: ENV.staticEndpoint + feeds[i]['media'][j]
                };
              }
              else if (feeds[i]['media'][j].match(/\.(htm|html)$/i)) {
                feeds[i]['media'][j] = {
                  type: 'html',
                  url: ENV.staticEndpoint + feeds[i]['media'][j],
                };
              }
              else if (feeds[i]['media'][j].match(/\.(mp4)$/i)) {
                feeds[i]['media'][j] = {
                  type: 'mp4',
                  url: ENV.staticEndpoint + feeds[i]['media'][j],
                };
              }
            }
          }
        }, function() {
          // if error occurs, use placeholders
          var placeholders = [
          {
            _id: { $oid: '0' },
            type: 'affordance',
            text: 'A #cap can be #worn like this.',
            media: [
              'images/hema/wear_frame.png',
              'images/hema/wear_result.png'
            ]
          },
          {
            _id: { $oid: '1' },
            type: 'language',
            text: '#Pick up the #pot.',
            media: [
              'static/videos/dm1.mp4'
            ]
          },
          {
            _id: { $oid: '2' },
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
            _id: { $oid: '3' },
            type: 'planning',
            text: 'The #watching activity between the #TV and #human is spatially distributed as follows.',
            media: [
              'images/ashesh/watching.png',
              'images/ashesh/watching_heatmap.png'
            ]
          },
          {
            _id: { $oid: '4' },
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
            _id: { $oid: '5' },
            type: 'affordance',
            text: 'A #microwave is interacted as follows for #opening.',
            media: [
              'images/hema/microwave_env.png',
              'images/hema/microwave_spatial_open.png'
            ]
          },
          {
            _id: { $oid: '6' },
            type: 'planning',
            text: 'The #interacting activity between two #humans is spatially distributed as follows.',
            media: [
              'images/ashesh/interacting.png',
              'images/ashesh/interacting_heatmap.png'
            ]
          },
          {
            _id: { $oid: '7' },
            type: '3D-detection',
            text: 'The #button of the #water #fountain can be manipulated.',
            media: [
              'images/jae/3a.png',
              'images/jae/3b.png',
              'images/jae/3c.png'
            ]
          }];
          for (var i = 0; i < placeholders.length; ++i) {
            feedIds.push(placeholders[i]['_id']['$oid']);
            feeds.push(placeholders[i]);
            feeds[i]['text'] = feeds[i]['text'].split(' ');
            for (var j = 0; j < feeds[i]['media'].length; ++j) {
              // Bundle tellmedave robot sequence with simulator url
              if (feeds[i]['media'][j].match(/\.(gif|jpg|jpeg|tiff|png)$/i)) {
                feeds[i]['media'][j] = {
                  type: 'image',
                  url: feeds[i]['media'][j]
                };
              }
              else if (feeds[i]['media'][j].match(/\.(htm|html)$/i)) {
                feeds[i]['media'][j] = {
                  type: 'html',
                  url: feeds[i]['media'][j]
                };
              }
              else if (feeds[i]['media'][j].match(/\.(mp4)$/i)) {
                feeds[i]['media'][j] = {
                  type: 'mp4',
                  url: feeds[i]['media'][j]
                };
              }
              else if (feeds[i]['media'][j].match(/\.(webm)$/i)) {
                feeds[i]['media'][j] = {
                  type: 'webm',
                  url: feeds[i]['media'][j]
                };
              }
            }
          }
        });
      },
      mostRecent: function() { return feeds; },
      moreRecent: function() {
        $resource(ENV.apiEndpoint + 'feed/infinite_scroll', { feedid: feedIds, k: feedSize, callback: 'JSON_CALLBACK' },
          { get: { method: 'JSONP', isArray: true } }).get().$promise
          .then(function(data) {
          var len = feeds.length;
          for (var k = 0; k < data.length; ++k) {
            var i = len + k;
            feedIds.push(data[i]['_id']['$oid']);
            feeds.push(data[i]);
            feeds[i]['text'] = feeds[i]['text'].split(' ');
            for (var j = 0; j < feeds[i]['media'].length; ++j) {
              // Bundle tellmedave robot sequence with simulator url
              if (feeds[i]['media'][j].match(/\.(gif|jpg|jpeg|tiff|png)$/i)) {
                feeds[i]['media'][j] = {
                  type: 'image',
                  url: ENV.staticEndpoint + feeds[i]['media'][j]
                };
              }
              else if (feeds[i]['media'][j].match(/\.(htm|html)$/i)) {
                feeds[i]['media'][j] = {
                  type: 'html',
                  url: ENV.staticEndpoint + feeds[i]['media'][j],
                };
              }
              else if (feeds[i]['media'][j].match(/\.(mp4)$/i)) {
                feeds[i]['media'][j] = {
                  type: 'mp4',
                  url: ENV.staticEndpoint + feeds[i]['media'][j],
                };
              }
              else if (feeds[i]['media'][j].match(/\.(webm)$/i)) {
                feeds[i]['media'][j] = {
                  type: 'webm',
                  url: ENV.staticEndpoint + feeds[i]['media'][j]
                };
              }
            }
          }});
      },
      query: function(q) {
        var res = [];
        q['k'] = feedSize;
        q['callback'] = 'JSON_CALLBACK';
        var url = ENV.apiEndpoint;
        if (q['hashword']) {
          url += 'feed/filter';
        }
        else if (q['type']) {
          url += 'feed/filter_type';
        }
        else {
          return [];
        }
        $resource(url, q, { get: { method: 'JSONP', isArray: true } }).get().$promise
        .then(function(data) {
          for (var i = 0; i < data.length; ++i) {
            res.push(data[i]);
            res[i]['text'] = res[i]['text'].split(' ');
            for (var j = 0; j < res[i]['media'].length; ++j) {
              // Bundle tellmedave robot sequence with simulator url
              if (res[i]['media'][j].match(/\.(gif|jpg|jpeg|tiff|png)$/i)) {
                res[i]['media'][j] = {
                  type: 'image',
                  url: ENV.staticEndpoint + res[i]['media'][j]
                };
              }
              else if (res[i]['media'][j].match(/\.(htm|html)$/i)) {
                res[i]['media'][j] = {
                  type: 'html',
                  url: ENV.staticEndpoint + res[i]['media'][j]
                };
              }
              else if (feeds[i]['media'][j].match(/\.(mp4)$/i)) {
                feeds[i]['media'][j] = {
                  type: 'mp4',
                  url: ENV.staticEndpoint + feeds[i]['media'][j],
                };
              }
              else if (feeds[i]['media'][j].match(/\.(webm)$/i)) {
                feeds[i]['media'][j] = {
                  type: 'webm',
                  url: ENV.staticEndpoint + feeds[i]['media'][j],
                };
              }
            }
          }
        });
        return res;
      }
    };
  }]);