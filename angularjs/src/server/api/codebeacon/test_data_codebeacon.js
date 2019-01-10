/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/nodeExpressTests"); 

var CodeBeaconSchema = new mongoose.Schema({
    message: {type: String},
    notes: {type: String},
    date: Date,
    page: {type: String},
    url: {type: String}
 });
var  CodeBeacon = mongoose.model('codebeacon', CodeBeaconSchema);

CodeBeacon.find({}).remove(function() {
  CodeBeacon.create({
    message : 'Development Tools',
    notes : 'Integration with Protractor, Jade, Stylus, Sass, CoffeeScript, and Les.',
    date:'',
    page:'test',
    url:'test'
  },
  {
    message : 'Development Tools2',
    notes : 'Integration with Protractor, Jade, Stylus, Sass, CoffeeScript, and Les.',
    date:'',
    page:'test',
    url:'test'
  });
});