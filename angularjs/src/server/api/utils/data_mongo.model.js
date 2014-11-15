module.exports = function(mymodel){
	'use strict';
	
	var mongoose = require('mongoose');
	var  q = require('q');

	var argusservice = {
		list    :list,
		create  :create,
		findById:findById,
		edit    :edit,
		remove  :remove	
	};
	
	return argusservice;  // returning the service..
	
	// Functions 
	function list() {
  		var deferred = q.defer();
  		mymodel.find(function (err, docs) {
   	 		if (err) { deferred.reject(err); }
    		deferred.resolve(docs);
  		});
  		return deferred.promise;
	};
	
	function create(currentDoc) {
  		var deferred = q.defer();
  		var myModel = new mymodel(currentDoc);
  		myModel.save(function (err) {
    		if (err) { deferred.reject(err); }
    		deferred.resolve(Model);
  		});
  		return deferred.promise;
	};
	
	function findById(id) {
  		var deferred = q.defer();
  		mymodel.findById(id, function (err, result) {
    		if (err) { deferred.reject(err); }
    		deferred.resolve(result);
  		});
  		return deferred.promise;	
	};
	
	function edit(id, doc) {
  		var deferred = q.defer(), self = this;
		self.findById(id).then(function (result) {
  			result.name = doc.name;
    		result.profile    = doc.profile;
    		result.assignment = doc.assignment;
    		result.notifications = doc.notifications;
   		 	result.date = doc.date;
    		result.service = doc.service;
    		result.notes = doc.notes;
    		result.branch = doc.branch;
    		result.sandBox = doc.sandBox;   
    		result.save(function (err, result) {
      			if (err) { deferred.reject(err); }
      			deferred.resolve(result);
    		});
  		}, function (reason) {
    		deferred.reject(reason);
  		});
  		return deferred.promise;
	};
	
	function remove(id) {
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
};