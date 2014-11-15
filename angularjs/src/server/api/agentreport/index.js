module.exports = function(app) {
   	var express = require('express');
   	var mymodel    = require('./agentreport.schema')();
    var controller = require('../utils/data_mongo.controller')(mymodel);
    var router = express.Router();

    router.get('/',          controller.list);    // Agent Report List api -- api/agents
	router.post('/create',   controller.create);  // Agent Report Create   -- api/agents/create
	router.put('/edit/:id',  controller.edit);    // Agent Report edit     -- api/agents/edit/id
	router.delete('/remove/:id', controller.remove);  // Agent Report Remove   -- api/agents/remove

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

