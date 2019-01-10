/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/nodeExpressTests"); 

var UserSchema = new mongoose.Schema({
  email: {type: String, required: true},
  name:  {type: String, required: true},
  login:  {type: String, required: true}
 });
//module.exports = mongoose.model('bong', bongSchema);
var  user = mongoose.model('user', UserSchema);

user.find({}).remove(function() {
    user.create({
        email: "jm@cisco.com",
        login: "jm",
        name: "JM"
    },
    {
        email: "bob@cisco.com",
        login: "bob",
        name: "Bobby"
    });
});