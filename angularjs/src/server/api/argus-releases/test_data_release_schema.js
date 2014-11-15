/**
 * Populate DB with sample data on server start
 */

'use strict';

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/nodeExpressTests"); 

var ReleaseSchema = new mongoose.Schema({
	engineer: {type: String, required: true},
	date:  {type: Date, required: true},
	duration: {type: String},
	task: {type: String},
	branch: {type: String},
	tag: {type: String},
	environment: {type: String},
	version: {type: String},
	name: {type: String},
	notes: {type: String} 
});
//module.exports = mongoose.model('bong', bongSchema);
var  release = mongoose.model('release', ReleaseSchema);

release.find({}).remove(function() {
  	release.create({
		branch: "BR_BISQUE_RELEASE",
		date: "2014-10-05",
		duration: "30",
		engineer: "Glen",
		environment: "Stage",
		name: "BISQUE",
		notes: "No security, build performed as normal",
		tag: "TAG_BISQUE_RELEASE_SNAPSHOT_R2_20141005_2046_PST",
		task: "Deploy to stage",
		version: "SNAPSHOT"
  	},
  	{
		branch: "BR_BISQUE_RELEASE",
		date: "2014-10-05",
		duration: "30",
		engineer: "Glen",
		environment: "Stage",
		name: "BISQUE",
		notes: "No security, build performed as normal",
		tag: "TAG_BISQUE_RELEASE_SNAPSHOT_R2_20141005_2046_PST",
		task: "Deploy to stage",
		version: "SNAPSHOT"
    });
});