'use strict';

var fs = require('fs'),
  q = require('q'),
  path = require('path'),
  http = require('http'),
  //config = require('../config').git,
  config = require('../../config/environment').git,
  service = {},
  file_name = __dirname + "/" + config.merge.report,
  report;


console.log( "File Name" + file_name);

service.getReport = function (opts) {
  var deferred = q.defer();
  if (report) { deferred.resolve(report); }
  if (opts && opts.src) { deferred.resolve(opts.src); }

  fs.readFile(file_name, "utf8", function (err, data) {
    if (err) { deferred.reject(err); }
    var result = {};
    result.branches = [];
    JSON.parse(data).branches.forEach(function (branch) {
      var commit_history = ((branch.commit_history || '').stdout || []).join('\n'),
        newBranch = {
          status: branch.merge_attempt.status,
          commit_history: commit_history
        },
        conflicts = [];
      branch.merge_attempt.merge.forEach(function (mergeItem) {
        conflicts.push({conflict : mergeItem});
      });
      result.conflicts = conflicts;
      result.branches.push(newBranch);
    });
    deferred.resolve(JSON.parse(data));
  });

  return deferred.promise;
};

service.getConflict = function (path) {
  var deferred = q.defer(),
    opts = {
      host: 'dobby.cisco.com',
      port: 80,
      path: path
    };

  http.get(opts, function (response) {
    var data = '';
    response.on('data', function (chunk) {
      data += chunk;
    });

    response.on('end', function () {
      deferred.resolve(data);
    });
  });

  return deferred.promise;
};

module.exports = service;
