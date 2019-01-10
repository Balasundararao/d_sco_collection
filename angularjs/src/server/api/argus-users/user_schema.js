module.exports = function(){
	var mongoose = require('mongoose');
	var UserSchema = new mongoose.Schema({
  		email: {type: String, required: true},
  		name:  {type: String, required: true},
  		login:  {type: String, required: true}
	});
	var mymodel = mongoose.model('User', UserSchema);
	
	return mymodel;
};


