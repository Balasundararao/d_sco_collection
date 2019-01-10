module.exports = function(){
	var mongoose = require('mongoose');
	SprintSchema = new mongoose.Schema({
    	name: {type: String},
    	goal: {type: String},
    	mql:  {type: String},
    	wallUrl: {type: String},
    	startDate: {type: Date},
    	endDate: {type: Date}
	});
	var mymodel = mongoose.model('Sprint', SprintSchema);
	return mymodel;
};
