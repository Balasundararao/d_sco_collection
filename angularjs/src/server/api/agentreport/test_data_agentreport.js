/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/nodeExpressTests"); 

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
//module.exports = mongoose.model('bong', bongSchema);
var  Agent = mongoose.model('agent', AgentSchema);

Agent.find({}).remove(function() {
  Agent.create({
    name : 'Development Tools',
    profile : 'Integration with Protractor, Jade, Stylus, Sass, CoffeeScript, and Les.',
    assignment:'cqsandbox',
    nofitification:'test',
    service:'test',
    notes:'ddd',
    branch:'Br-test-c12',
    sandbox:'test'
  },
  {
   name : 'Development Tools2',
    profile : 'Integration with Protractor, Jade, Stylus, Sass, CoffeeScript, and Les.',
    assignment:'cqsandbox',
    nofitification:'test',
    service:'test',
    notes:'ddd',
    branch:'Br-test-c12',
    sandbox:'test'
  });
});