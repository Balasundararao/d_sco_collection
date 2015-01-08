var q = require('q'),
  http = require('http');

var httpBuddy = function (options) {
  var deferred = q.defer(), req,
    errorHandler = function (reason) { deferred.reject(reason); },
    responseHandler = function (response) {
      var result = '';
      response.setEncoding('utf8');
      response.on('data', function (chunk) { result += chunk; });
      response.on('end', function () { deferred.resolve(result); });
    };

  options = options || {};
  req = http.request(options, responseHandler);
  req.on('error', errorHandler);
  req.end();

  return deferred.promise;
};

module.exports = httpBuddy;