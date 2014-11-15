module.exports = function(){
	var mongoose = require('mongoose');
	
	var AgentSchema = new mongoose.Schema({
    	name: {type: String},
    	profile: {type: String},
    	assignment: {type: String},
    	notifications: {type: String},
    	date: {type: Date, "default":Date.now},
    	service: {type: String},
    	notes: {type: String},
    	branch: {type: String},
    	sandBox: {type: Boolean}    
 	});
	var mymodel = mongoose.model('Agent', AgentSchema);
	return mymodel;
};





