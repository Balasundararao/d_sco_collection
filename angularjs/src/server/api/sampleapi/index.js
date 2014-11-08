module.exports = function(app) {
   	var express = require('express');
    var agentcontroller = require('./api')();
    var router = express.Router();

    router.get('/',agentcontroller.list); //  forlisting  api -- /  ( this is the way it used in app.js app.use('/api/agents', agents());)
	router.post('/create',   agentcontroller.create);//  To Create -- /create
	router.put('/edit/:id',  agentcontroller.edit);  //  To edit   -- /edit/:id
	router.delete('/remove', agentcontroller.remove);//  To Remove -- /remove

	return router;
};


// Simple way to call ...
// 'use strict';
// var express = require('express');
// var agentcontroller = require('./agentreport_controller')();
// var router = express.Router();

// router.get('/',          agentcontroller.list);
// router.post('/create',   agentcontroller.create);
// router.put('/edit/:id',  agentcontroller.edit);
// router.delete('/remove', agentcontroller.remove);

// module.exports = router;
