/*jslint node: true */

'use strict';

var jenkins,
  qs = require('querystring'),
  _ = require('lodash'),
  q = require('q'),
  config = require('../config').jenkins.options,
  httpBuddy = require('./httpBuddy');

jenkins = {};

jenkins.handlers = function (app) {
  /*jshint unused: true, node: true */
  /*jslint unparam: true, node: true */
  app.get('/jm', function (req, res) {
    jenkins.request({path: '/api/json'}).then(function (body) {
      res.json(body);
    });
  });
  /*jshint unused: false, node: true */
  /*jslint unparam: false, node: true */
};

jenkins.request = function (options) {
  var deferred = q.defer(),
    replyWithJson = false;

  _.merge(config, options);

  if (!config.path) { deferred.reject("No path"); }

  if (config.path && config.path.indexOf("json", config.path.length - "json".length) !== -1) {
    replyWithJson = true;
  }

  console.log(config);

  httpBuddy(config).then(function (body) {
    if (replyWithJson) { 
      body = JSON.parse(body); 
      console.log("replyWithJson");
    }
    deferred.resolve(body);
  },function (reason) {
    console.log(reason);
    deferred.reject(reason);
  });

  return deferred.promise;
};

jenkins.hookomator = function (action, branch, callback) {
  var opts = {
    method: 'POST',
    path: '/job/hookomator/buildWithParameters?action=' + action + '&branch=' + branch
  };
  jenkins.request(opts).then(function (body) {
    if (body === '') { body = '{"success":"true"}'; }
    callback.call(this, JSON.parse(body));
  });
};

jenkins.backmergeDevelop = function (branch, callback) {

  var opts = {
    method: 'POST',
    path: '/job/backmerge-develop-to-branch/buildWithParameters?branch=' + branch
  };
  jenkins.request(opts).then(function () {
    callback.call(this, true);
  });
};

jenkins.createBranch = function (cfg) {
  var opts = {
    method: 'POST',
    path: '/job/create-branch/buildWithParameters?' + qs.stringify(cfg)
  },
    deferred = q.defer();

  jenkins.request(opts).then(function () {
    deferred.resolve(true);
  });

  return deferred.promise;
};


module.exports = jenkins;
