module.exports = function(app) {
   	var express    = require('express');
   	var mymodel    = require('./release_schema')();
    var controller = require('../utils/data_mongo.controller')(mymodel);
    var router = express.Router();

    router.get('/',              controller.list);    
	router.post('/create',       controller.create);  
	router.put('/edit/:id',      controller.edit);    
	router.delete('/remove/:id', controller.remove); 

	return router;
};
