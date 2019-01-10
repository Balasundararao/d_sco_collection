module.exports = function(){
	var mongoose = require('mongoose');
	var Schema   = mongoose.Schema;
	TeamSchema = new mongoose.Schema({
    	name: {type: String, required: true},
    	imageUrl: {type: String},
    	backlog: {type: String},
    	backlogUrl: {type: String},
    	productOwner: {type: Schema.ObjectId, ref: 'User'},
    	scrumMaster: {type: Schema.ObjectId, ref: 'User'},
    	members: [{type: Schema.ObjectId, ref: 'User'}],
    	sprints: [{type: Schema.ObjectId, ref: 'Sprint'}]
	});
	var mymodel = mongoose.model('Team', TeamSchema);
	return mymodel;
};
