module.exports = function(){
	var mongoose = require('mongoose');
	ReleaseSchema = new mongoose.Schema({
  		engineer: {type: String, required: true},
  		date:  {type: Date, required: true},
  		duration: {type: String},
  		task: {type: String},
  		branch: {type: String},
  		tag: {type: String},
  		environment: {type: String},
  		version: {type: String},
  		name: {type: String},
  		notes: {type: String}
	});
	var mymodel = mongoose.model('Release', ReleaseSchema);
	return mymodel;
};
