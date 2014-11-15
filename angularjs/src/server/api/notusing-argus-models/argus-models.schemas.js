/*jslint unparam: true, node: true */
module.exports = function (connection) {
//  ##### List of Schemas... ##### 
var mongoose = require('mongoose');
var logger 		  = require('../../logger');
var UserSchema    = require('./user_schema'),
  	TeamSchema    = require('./team_schema'),
  	SprintSchema  = require('./sprint_schema'),
  	ReleaseSchema = require('./release_schema');
var ModelService  = require('./argus-models.model.js');

	var schemas  = [
  		{name: "User", schema: UserSchema},
  		{name: "Sprint", schema: SprintSchema},
  		{name: "Team", schema: TeamSchema,populated_fields: ['productOwner', 'scrumMaster', 'members', 'sprints']},
  		{name: "Release", schema: ReleaseSchema}
	];
	
  	var models = {};
 	schemas.forEach(function (schema) {
    var model = mongoose.model(schema.name, schema.schema),
      	schemaName = schema.name.toLowerCase();
    	logger.info('service', 'schema', schema.name);
    	models[schemaName] = new ModelService(model, schema.populated_fields);
  	});	
  	return function (req, res, next) {
  		console.log( models );
    	req.models = models;
    	next();
  	};
};
