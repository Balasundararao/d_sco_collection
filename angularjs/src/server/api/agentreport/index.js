module.exports = function(app) {
   	var express = require('express');
    var agentcontroller = require('./agentreport.controller')();
    var router = express.Router();

    router.get('/',          agentcontroller.list);    // Agent Report List api -- api/agents
	router.post('/create',   agentcontroller.create);  // Agent Report Create   -- api/agents/create
	router.put('/edit/:id',  agentcontroller.edit);    // Agent Report edit     -- api/agents/edit/id
	router.delete('/remove/:id', agentcontroller.remove);  // Agent Report Remove   -- api/agents/remove

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

