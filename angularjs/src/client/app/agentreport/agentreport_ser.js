/*jshint unused: true, node: true */
/*jslint unparam: true, node: true */

var agentService = require('./agentService'),
  api = {},
  _urlPrefix,
  _endpoints = {
    list: { uri: '' },
    create: { uri: 'create' }
  };

api.register = function (app, urlPrefix) {
  var self = this;
  _urlPrefix = urlPrefix || '/api/agents';
  app.get(_urlPrefix, self.list);
  app.post(_urlPrefix + '/create', self.create);
  app.delete(_urlPrefix + '/remove/:id', self.remove);
  app.put(_urlPrefix + '/edit/:id', self.edit);
};

api.list = function (req, res) {
  agentService.list().then(function (agents) {
    res.json(agents);
  }, function (reason) {
    res.json(reason);
  });
};

api.create = function (req, res) {
  agentService.create(req.body).then(function (agent) {
    res.json(agent);
  }, function (reason) {
    res.json(reason);
  });
};

api.remove = function (req, res) {
  var id = req.params.id;
  agentService.remove(id).then(function () {
    res.json(true);
  }, function (reason) { 
    res.json(reason);
  });
};

api.edit = function (req, res) {
  var id = req.params.id;
  agentService.edit(id, req.body).then(function () {
    res.json(true);
  }, function (reason) {
    res.json(reason);
  });
};
module.exports = api;