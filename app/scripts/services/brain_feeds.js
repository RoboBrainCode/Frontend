angular
  .module('roboBrainApp')
  .factory('brainFeeds', ['$resource', '$interval', function($resource, $interval) {
    // initialize with k most recent feeds
    var feeds = $resource(ENV.apiEndpoint + '/feeds/most_recent').get({}, function() {
      for (var i = 0; i < feeds.length; ++i) {
        feeds[i]['text'] = feeds[i]['text'].split(' ');
      }
    });
    var feedSize = 20;
    // update array once per minute
    var lastUpdate = new Date().getTime();
    var updateLoop = $interval(function() {
      var newFeeds = $resource(ENV.apiEndpoint + '/feeds/since/:datetime')
        .get({datetime: lastUpdate}, function() {
          lastUpdate = newDate().getTime();
          // prepend new feeds, then shrink down to previous size
          for (var i = 0; i < newFeeds.length; ++i) {
            newFeeds[i]['text'] = newFeeds[i]['text'].split(' ');
          }
          tmp = newFeeds.concat(feeds);
          if (newFeeds.length + feeds.length - feedSize > 0) {
            tmp = tmp.slice(0, feedSize);
          }
          feeds = tmp;
        });
      
    }, 60000);
    return function() {
      return feeds;
    };
  }]);