module.exports = function(mymodel) {	
	//var mongoose = require('mongoose');
	var argusservice = require('./data_mongo.model')(mymodel);
    var service = {
        list: list,
        create:create,
        remove:remove,
        edit:edit
    };
    return service;

    function list(req,res) {
        argusservice.list().then(function (docs) {
            res.json(docs);
        }, function (reason) {
            res.json(reason);
        });
    };
    function create(req,res) {
        argusservice.create(req.body).then(function (currentDoc) {
            res.json(currentDoc);
        }, function (reason) {
            res.json(reason);
        });
    };
    function remove(req,res) {
        var id = req.params.id;
  		argusservice.remove(id).then(function () {
    	    res.json(true);
  		}, function (reason) { 
    		res.json(reason);
  		});
    };
    function edit(req,res) {
        var id = req.params.id;
  		argusservice.edit(id, req.body).then(function () {
    		res.json(true);
  		}, function (reason) {
    		res.json(reason);
  		});
    };
};