angular
  .module('roboBrainApp')
  .factory('brainFeeds', ['$resource', '$interval', '$cookieStore', 'ENV', function($resource, $interval, $cookieStore, ENV) {
    // initialize with k most recent feeds
    var feeds = [];
    var feedSize = 20;
    var offset = 0;
    var isScrolling = true;
    return {
      init: function() {
        feeds = [];
        offset = 0;
        return feeds;
      },
      moreRecent: function() {
        if (isScrolling) {
          isScrolling = false;
          $resource(ENV.apiEndpoint + 'feed/infinite_scroll', { k: feedSize, cur: offset, callback: 'JSON_CALLBACK' },
            { get: { method: 'JSONP', isArray: true } }).get().$promise
            .then(function(data) {
            var feedLength = offset;
            for (var k = 0; k < data.length; ++k) {
              var i = feedLength + k;
              offset = i + 1;
              feeds.push(data[k]);
              if ($cookieStore.get(data[k]['_id']['$oid'] + 'upvote')) {
                feeds[i]['upvoted'] = true;
              }
              if ($cookieStore.get(data[k]['_id']['$oid'] + 'downvote')) {
                feeds[i]['downvoted'] = true;
              }
              feeds[i]['text'] = feeds[i]['text'].split(' ');
              for (var j = 0; j < feeds[i]['media'].length; ++j) {
                // Bundle tellmedave robot sequence with simulator url
                if (feeds[i]['media'][j].match(/\.(gif|jpg|jpeg|tiff|png)$/i)) {
                  var p = feeds[i]['media'][j].lastIndexOf('.');
                  feeds[i]['media'][j] = {
                    type: 'image',
                    url: ENV.staticEndpoint + feeds[i]['media'][j].slice(0, p) + '_thumb' + feeds[i]['media'][j].slice(p)
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
                    url: ENV.staticEndpoint + feeds[i]['media'][j],
                  };
                }
              }
            }
            isScrolling = true;
          }, function() {
            feeds = [];
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
              type: 'language',
              text: '#Pick up the #pot.',
              media: [
                'static/videos/dm1.mp4'
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
        }
      },
      vote: function(feedid, direction) {
        $resource(ENV.apiEndpoint + 'feed/upvotes', { feedid: feedid, callback: 'JSON_CALLBACK', vote: direction },
        { get: { method: 'JSONP' } }).get().$promise
        .then(function() {
          if (direction > 0) {
            $cookieStore.put(feedid + 'upvote', 1);
          }
          else {
            $cookieStore.put(feedid + 'downvote', 1);
          }
        });
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
            if ($cookieStore.get(data[i]['_id']['$oid'] + 'upvote')) {
              res[i]['upvoted'] = true;
            }
            if ($cookieStore.get(data[i]['_id']['$oid'] + 'downvote')) {
              res[i]['downvoted'] = true;
            }
            res[i]['text'] = res[i]['text'].split(' ');
            for (var j = 0; j < res[i]['media'].length; ++j) {
              // Bundle tellmedave robot sequence with simulator url
              if (res[i]['media'][j].match(/\.(gif|jpg|jpeg|tiff|png)$/i)) {
                var p = res[i]['media'][j].lastIndexOf('.');
                res[i]['media'][j] = {
                  type: 'image',
                  url: ENV.staticEndpoint + res[i]['media'][j].slice(0, p) + '_thumb' + res[i]['media'][j].slice(p)
                };
              }
              else if (res[i]['media'][j].match(/\.(htm|html)$/i)) {
                res[i]['media'][j] = {
                  type: 'html',
                  url: ENV.staticEndpoint + res[i]['media'][j]
                };
              }
              else if (res[i]['media'][j].match(/\.(mp4)$/i)) {
                res[i]['media'][j] = {
                  type: 'mp4',
                  url: ENV.staticEndpoint + res[i]['media'][j],
                };
              }
              else if (res[i]['media'][j].match(/\.(webm)$/i)) {
                res[i]['media'][j] = {
                  type: 'webm',
                  url: ENV.staticEndpoint + res[i]['media'][j],
                };
              }
            }
          }
        });
        return res;
      }
    };
  }]);