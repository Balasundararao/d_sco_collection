/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/nodeExpressTests"); 

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
    	parentId     : { type:String}  
 });
//module.exports = mongoose.model('bong', bongSchema);
var  releaseActivity = mongoose.model('releaseActivity', ReleaseActivitySchema);

releaseActivity.find({}).remove(function() {
  releaseActivity.create({
    name : 'Development Tools',
    releasetype  : 'test', 
   	branchname   : 'test',
    tagname      : 'test',
    environment  : 'test',
    snapshot     : 'test',
    version      : 'test',
    futuredate   : '', 
    actualstartdate:'', 
    actualenddate: '', 
    requestedby  : 'test', 
    parentId     : 'test'
  },
  {
    name : 'Development Tools2',
    releasetype  : 'test', 
   	branchname   : 'test',
    tagname      : 'test',
    environment  : 'test',
    snapshot     : 'test',
    version      : 'test',
    futuredate   : '', 
    actualstartdate:'', 
    actualenddate: '', 
    requestedby  : 'test', 
    parentId     : 'test'
  });
});