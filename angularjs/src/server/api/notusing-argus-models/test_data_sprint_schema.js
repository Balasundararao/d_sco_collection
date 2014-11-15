/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/nodeExpressTests"); 

var SprintSchema = new mongoose.Schema({
    name: {type: String},
    goal: {type: String},
    mql:  {type: String},
    wallUrl: {type: String},
    startDate: {type: Date},
    endDate: {type: Date}
 });
//module.exports = mongoose.model('bong', bongSchema);
var  sprint = mongoose.model('sprint', SprintSchema);

sprint.find({}).remove(function() {
    sprint.create({
		burndown: "1234",
		card: 1234,
		endDate: "2014-07-27",
		goal: "get better at devops",
		mql: "SELECT 'Effort Points', number, name, type, status, 'Simple Status', 'Developer - ID', 'Powner', 'Hours Remaining', 'Hours Estimate', 'Hours Remaining Historical' WHERE 'Sprint Planning - Sprint' = NUMBER 8814 AND 'Simple Status' != 'Trash'",
		name: "Dev-Ops Sprint 7",
		startDate: "2014-06-30T04:00:00.000Z"
  	},
  	{
		burndown: "9282",
		card: 9280,
		endDate: "2014-09-21",
		goal: "improve testing",
		mql: "SELECT 'Effort Points', number, name, type, status, 'Simple Status', 'Developer - ID', 'Powner', 'Hours Remaining', 'Hours Estimate', 'Hours Remaining Historical' WHERE 'Sprint Planning - Sprint' = NUMBER 9280 AND 'Simple Status' != 'Trash'",
		name: "Dev-Ops Sprint 10",
		startDate: "2014-09-02T04:00:00.000Z"
  	});
});