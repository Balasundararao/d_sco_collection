/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/nodeExpressTests"); 

var TeamSchema = new mongoose.Schema({
    name: {type: String, required: true},
    imageUrl: {type: String},
    backlog: {type: String},
    backlogUrl: {type: String},
    productOwner: {type: Schema.ObjectId, ref: 'User'},
    scrumMaster: {type: Schema.ObjectId, ref: 'User'},
    members: [{type: Schema.ObjectId, ref: 'User'}],
    sprints: [{type: Schema.ObjectId, ref: 'Sprint'}]  
 });
//module.exports = mongoose.model('bong', bongSchema);
var  team = mongoose.model('team', TeamSchema);

team.find({}).remove(function() {
    team.create({
		backlog: "SELECT 'Effort Points',  health, number, name, type, status, 'Simple Status', 'Powner' WHERE 'Planning - Area' = NUMBER 8010 AND 'Sprint Planning - Sprint' = NUMBER 8014 AND Type = 'Story' AND 'Simple Status' != 'Trash'",
		backlogUrl: "http://cardbot.cisco.com:8080/projects/leopard_spots/cards/grid?aggregate_property%5Bcolumn%5D=effort+points&aggregate_type%5Bcolumn%5D=sum&color_by=health&favorite_id=1336&filters%5B%5D=%5BType%5D%5Bis%5D%5BStory%5D&filters%5B%5D=%5BSprint+Planning+-+Sprint%5D%5Bis%5D%5B8014%5D&filters%5B%5D=%5BSprint+Planning+-+Sprint%5D%5Bis%5D%5B%5D&filters%5B%5D=%5BPlanning+-+Area%5D%5Bis%5D%5B8010%5D&filters%5B%5D=%5BSimple+Status%5D%5Bis+not%5D%5BTrash%5D&filters%5B%5D=%5BDevelopment+Team%5D%5Bis%5D%5Bcisco.com+ID%5D&group_by%5Blane%5D=health&lanes=New+%2F+Needs+Analysis%2CDefined+and+Blocked%2CReady+for+Team+Estimation%2CReady+for+Sprinting&tab=All",
		members: [],
		name: "CEC to WEM",
		productOwner: {_id:54072be2030216c93c7acebb, name:Nathan, login:nathan, email:nathan@cisco.com, __v:0},
		scrumMaster: {_id:54072bec030216c93c7acebc, name:Ruben, login:ruben, email:ruben@cisco.com, __v:0},
		sprints: [{_id:540e1622eb31d7e10a951c5b, name:CEC to WEM Sprint 4, goal:do something better, card:1234,…}]
  	});
});