'use strict';

var mongoose = require('mongoose'),
    q = require('q');
mongoose.connect('mongodb://testingUser:writer@dobby.cisco.com:27017/testing');
//var Schema = mongoose.Schema;
//var AgentSchema = new Schema({
//    name: { type: String, required: true },
//    profile: { type: String },
//    assignment: { type: String }
//});
//var Agent = mongoose.model('Agent', AgentSchema);
var agentService = {};

var list = function () {
    var deferred = q.defer();
    Agent.find(function (err, agents) {
        if (err) deferred.reject(err);
        deferred.resolve(agents);
    });
    return deferred.promise;
};

console.log(list());