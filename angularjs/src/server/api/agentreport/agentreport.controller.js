module.exports = function() {
	var agentService = require('./agentreport.model.js');
    var service = {
        list: list,
        create:create,
        remove:remove,
        edit:edit
    };
    return service;

    function list(req,res) {
        agentService.list().then(function (agents) {
            res.json(agents);
        }, function (reason) {
            res.json(reason);
        });
    };
    function create(req,res) {
        agentService.create(req.body).then(function (agent) {
            res.json(agent);
        }, function (reason) {
            res.json(reason);
        });
    };
    function remove(req,res) {
        var id = req.params.id;
  		agentService.remove(id).then(function () {
    	    res.json(true);
  		}, function (reason) { 
    		res.json(reason);
  		});
    };
    function edit(req,res) {
        var id = req.params.id;
  		agentService.edit(id, req.body).then(function () {
    		res.json(true);
  		}, function (reason) {
    		res.json(reason);
  		});
    };
};