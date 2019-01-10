module.exports = function() {
	var relactivityService = require('./releaseactivityreport.model.js')();
    var service = {
        list: list,
        create:create,
        remove:remove,
        edit:edit
    };
    return service;

    function list(req,res) {
        relactivityService.list().then(function (agents) {
            res.json(agents);
        }, function (reason) {
            res.json(reason);
        });
    };
    function create(req,res) {
        relactivityService.create(req.body).then(function (agent) {
            res.json(agent);
        }, function (reason) {
            res.json(reason);
        });
    };
    function remove(req,res) {
        var id = req.params.id;
  		relactivityService.remove(id).then(function () {
    	    res.json(true);
  		}, function (reason) { 
    		res.json(reason);
  		});
    };
    function edit(req,res) {
        var id = req.params.id;
  		relactivityService.edit(id, req.body).then(function () {
    		res.json(true);
  		}, function (reason) {
    		res.json(reason);
  		});
    };
};