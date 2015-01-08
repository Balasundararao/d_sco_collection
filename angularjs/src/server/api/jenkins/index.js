module.exports = function(mymodel) {
   	var express    = require('express');
    var router = express.Router();

    router.get('/',              jenkins);    
	router.post('/create',       controller.create);  
	router.put('/edit/:id',      controller.edit);    
	router.delete('/remove/:id', controller.remove); 

	function jenkins(req, res){
		// peel off /api/jenkins
  	 	var pathname = url.parse(req.url).pathname,
			path = pathname.substr(12);
  		var opts = {
    		method: 'GET',
    		path: path
  		},
    	deferred = q.defer();

  		jenkins.request(opts).then(function (data) {
    		//console.log("jenkins.request opts");
    		//console.log(data.url);
    		//deferred.resolve(data);
    		res.json(data);
  		});
  		//console.log("deferred.promise");
  		return deferred.promise;	
	}


	return router;
};





exports.hookomator = function (req, res) {
  jenkins.hookomator(req.params.action, req.params.branch, function (response) {
    res.json(response);
  });
};

exports.createBranch = function (req, res) {
  var scrub = validators.newBranch(req.body);

  if (scrub.errors.length !== 0) {
    res.json({ 'error' : true, 'data' : scrub.errors });
  } else {
    jenkins.createBranch(scrub.config).then(function (data) {
      if (data === true) {
        res.json({ 'error' : false, 'data' : 'http://dobby.cisco.com:8080/job/create-feature-branch/: ' + scrub.config.branchName });
      } else {
        res.json({ 'error' : true, 'data' : 'Branch not created: ' + scrub.config.branchName});
      }
    });
  }
};

exports.backmergeDevelop = function (req, res) {
  var branch_name = req.body.name;
  jenkins.backmergeDevelop(branch_name, function (data) {
    if (data === true) {
      res.json('http://dobby.cisco.com:8080/job/backmerge-develop-to-branch/: ' + branch_name);
    } else {
      res.json('Unable to backmerge develop to: ' + branch_name);
    }
  });
};

