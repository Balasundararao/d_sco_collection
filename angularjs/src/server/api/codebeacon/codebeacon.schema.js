module.exports = function(){
	var mongoose = require('mongoose');
 	var CodeBeaconSchema = new mongoose.Schema({
    	message: {type: String},
    	notes: {type: String},
    	date: Date,
    	page: {type: String},
    	url: {type: String}
	});
	var mymodel = mongoose.model('Codebeacon', CodeBeaconSchema);
	return mymodel;
};





