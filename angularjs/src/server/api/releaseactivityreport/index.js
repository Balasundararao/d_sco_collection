module.exports = function(app) {
   	var express = require('express');
    var relactivitycontroller = require('./releaseactivityreport.controller')();
    var router = express.Router();

    router.get('/',          relactivitycontroller.list);    
	router.post('/create',   relactivitycontroller.create);  
	router.put('/edit/:id',  relactivitycontroller.edit);    
	router.delete('/remove/:id', relactivitycontroller.remove);  

	return router;
};


