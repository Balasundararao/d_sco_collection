'use strict';

var mongoose = require('mongoose');
var  q = require('q');
var AgentSchema = new mongoose.Schema({
    name: {type: String},
    profile: {type: String},
    assignment: {type: String},
    notifications: {type: String},
    date: Date,
    service: {type: String},
    notes: {type: String},
    branch: {type: String},
    sandBox: {type: Boolean}    
 });
var Agent = mongoose.model("Agent", AgentSchema);
	
var agentService = {};

agentService.create = function (agent) {
  var deferred = q.defer();
  var agentModel = new Agent(agent);

  agentModel.save(function (err) {
    if (err) { deferred.reject(err); }
    deferred.resolve(agentModel);
  });

  return deferred.promise;
};

agentService.list = function () {
  var deferred = q.defer();
  Agent.find(function (err, agents) {
    if (err) { deferred.reject(err); }
    deferred.resolve(agents);
  });
  return deferred.promise;
};

agentService.findById = function (id) {
  var deferred = q.defer();
  Agent.findById(id, function (err, result) {
    if (err) { deferred.reject(err); }
    deferred.resolve(result);
  });
  return deferred.promise;
};

agentService.edit = function (id, agent) {
  var deferred = q.defer(), self = this;

  self.findById(id).then(function (result) {
  	console.log( agent );
    result.name = agent.name;
    result.profile    = agent.profile;
    result.assignment = agent.assignment;
    result.notifications = agent.notifications;
    result.date = agent.date;
    result.service = agent.service;
    result.notes = agent.notes;
    result.branch = agent.branch;
    result.sandBox = agent.sandBox;   
    result.save(function (err, result) {
      if (err) { deferred.reject(err); }
      deferred.resolve(result);
    });
  }, function (reason) {
    deferred.reject(reason);
  });

  return deferred.promise;
};

agentService.remove = function (id) {
  var deferred = q.defer();

  this.findById(id).then(function (result) {
    result.remove(function (err) {
      if (err) { deferred.reject(err); }
      deferred.resolve(true);
    });
  }, function (reason) {
    deferred.reject(reason);
  });

  return deferred.promise;
};

module.exports = agentService;
