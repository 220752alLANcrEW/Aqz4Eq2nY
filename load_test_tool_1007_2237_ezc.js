// 代码生成时间: 2025-10-07 22:37:45
(function($) {

  'use strict';

  // Default configuration options
  var defaultConfig = {
    url: '', // URL to send requests to
    method: 'GET', // HTTP method to use
    payload: null, // Payload to send with the request (for POST requests)
    headers: {}, // Additional headers to send with the request
    interval: 1000, // Interval between requests in milliseconds
    maxRequests: 100, // Maximum number of requests to send
    requestCount: 0, // Counter for tracking the number of requests sent
    errorCallbacks: [], // List of functions to call on error
    successCallbacks: [] // List of functions to call on success
  };

  // Load test function
  var loadTest = function(config) {
    var config = $.extend(true, {}, defaultConfig, config);

    // Validate configuration
    if (!config.url) {
      throw new Error('URL is required for load testing');
    }

    // Start the load test
    var startLoadTest = function() {
      var sendRequest = function() {
        $.ajax({
          url: config.url,
          type: config.method,
          data: config.payload,
          headers: config.headers,
          success: function(response) {
            config.requestCount++;
            config.successCallbacks.forEach(function(callback) { callback(response); });
            if (config.requestCount < config.maxRequests) {
              setTimeout(sendRequest, config.interval);
            }
          },
          error: function(jqXHR, textStatus, errorThrown) {
            config.errorCallbacks.forEach(function(callback) { callback(jqXHR, textStatus, errorThrown); });
          }
        });
      };

      // Trigger the first request
      sendRequest();
    };

    // Start the load test with the provided configuration
    startLoadTest();
  };

  // Expose the loadTest function to the global scope
  window.loadTest = loadTest;

}(jQuery));
