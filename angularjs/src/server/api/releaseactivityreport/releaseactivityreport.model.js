module.exports = function(){
	'use strict';
	var mongoose = require('mongoose');
	var  q = require('q');
	var ReleaseActivitySchema = new mongoose.Schema({
    	name         : {type: String},
    	releasetype  : { type:String}, 
    	branchname   : { type:String}, 
    	tagname      : { type:String}, 
    	environment  : { type:String}, 
    	snapshot     : { type:String}, 
    	version      : { type:String}, 
    	futuredate   : { type: Date, "default": Date.now}, 
    	actualstartdate: { type:Date}, 
    	actualenddate: { type:Date}, 
    	requestedby  : { type:String}, 
    	parentId     :{ type:String}  
 	});
	var releaseActivity = mongoose.model("releaseActivity", ReleaseActivitySchema);
	
	var relactivityService = {
		list    :list,
		create  :create,
		findById:findById,
		edit    :edit,
		remove  :remove	
	};
	return relactivityService;
	
	// Functions 
	function list(){
		var deferred = q.defer();
		releaseActivity.find(function (err, records) {
    		if (err) { deferred.reject(err); }
    		deferred.resolve(records);
  		});
  		return deferred.promise;
	};
	
	function create(record){
		var deferred = q.defer();
  		var relactivitymodel = new releaseActivity(record);
		relactivitymodel.save(function (err) {
    		if (err) { deferred.reject(err); }
    		deferred.resolve(relactivitymodel);
  		});
		return deferred.promise;
	};
	
	function findById(id) {
  		var deferred = q.defer();
  		releaseActivity.findById(id, function (err, result) {
    		if (err) { deferred.reject(err); }
    		deferred.resolve(result);
  		});
  		return deferred.promise;
	};
	
	function edit(id, document){
		var deferred = q.defer(), self = this;
  		self.findById(id).then(function (result) {
    		result.name  = document.name;
    		result.releasetype   = document.releasetype;
    		result.branchname    = document.branchname;
    		result.tagname       = document.tagname;
    		result.environment   = document.environment;
    		result.snapshot      = document.snapshot;
    		result.version       = document.version;
    		result.futuredate    = document.futuredate;
    		result.actualstartdate=document.actualstartdate;
    		result.actualenddate = document.actualenddate;
    		result.requestedby   = document.requestedby;
    		result.parentId      = document.parentId;
    		
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




