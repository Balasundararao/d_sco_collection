/*jslint unparam: true, node: true */

var q    = require('q'),
  router = require('express').Router(),
  _res,
  _defaultSuccess = function (o) { _res.json(o); },
  _defaultError = function (o) { _res.send(o); };
  
router.use(function (req, res, next) {
	 console.log('%s %s %s %s', "hello-", req.method, req.url, req.path);
  	_res = res;
    next();
});

router.param('model', function (req, res, next, model) {
  model = model.toLowerCase();
  if (req.models[model] === undefined) {
    return next(model + ' not found');
  }
  req.model = req.models[model];
  req.criteria = {};
  console.log('model', model);
  return next();
});

router.param('_id', function (req, res, next, _id) {
  	req._id = _id;
  	return next();
});

router.route('/:model').
  post(function (req, res) {
    return req.model.create(req.body).
      then(_defaultSuccess, _defaultError);
  }).
  get(function (req, res) {
    return req.model.list().
      then(_defaultSuccess, _defaultError);
  }).
  delete(function (req, res) {
    return req.model.drop().
      then(_defaultSuccess, _defaultError);
  });

router.route('/:model/:_id').
  get(function (req, res) {
    return req.model.get(req._id).
      then(_defaultSuccess, _defaultError);
  }).
  put(function (req, res) {
    return req.model.update(req._id, req.body).
      then(_defaultSuccess, _defaultError);
  }).
  delete(function (req, res) {
    return req.model.remove(req._id).
      then(_defaultSuccess, _defaultError);
  });

module.exports = router;



