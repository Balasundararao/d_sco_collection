/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

    // Insert routes below
  	app.use('/api/things',        require('./api/thing'));
  	app.use('/api/agents',        require('./api/agentreport')());
  	app.use('/api/relactivities', require('./api/releaseactivityreport')());
  	app.use('/api/users',         require('./api/argus-users')());
  	app.use('/api/releases',      require('./api/argus-releases')());
  	app.use('/api/sprints',       require('./api/argus-sprint')());
  	app.use('/api/teams',         require('./api/argus-teams')());

   
  	// All undefined asset or api routes should return a 404
  	app.route('/:url(api|auth|components|app|bower_components|assets)/*').get(errors[404]);
  	//All other routes should redirect to the index.html
  	app.route('/*')
    	.get(function(req, res) {
      	res.sendfile(app.get('appPath') + '/index.html');
  	});
};
