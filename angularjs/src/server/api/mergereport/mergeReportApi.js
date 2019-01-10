/*jshint unused: true, node: true */
module.exports = function(mymodel) {
   	var express    = require('express');
   	var service = require('./mergeReportService');
    var q = require('q'); 
    var router = express.Router();

    router.get('/',              mergeReport);    
	router.get('/conflict/*',    getConflict);  

    function mergeReport(req, res) {
  		q.when(service.getReport(), function (report) {
    		res.json(report);
  		}, function (reason) {
    		res.json(reason);
  		});
	};
	function getConflict(req, res) {
  		// peel off /api/git/mergeReport/conflict
  		var path = url.parse(req.url).pathname.substr(29);
  		service.getConflict(path).then(function (result) {
    		res.write(result);
    		res.end();
  		}, function (reason) {
    		res.json(reason);
  		});
  	};
	return router;
};
