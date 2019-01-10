'use strict';

//  ##### Model Service.. ##### 
function ModelService(model, populated_fields) {
  this.model = model;
  this.populated_fields = populated_fields;
}

ModelService.prototype._populate = function (query) {
  if (!this.populated_fields) {
    return query;
  }
  this.populated_fields.forEach(function (populated_field) {
    logger.info('service', 'populate', populated_field);
    query.populate(populated_field);
  });
  return query;
};

ModelService.prototype._unpopulate = function (model) {
  if (!this.populated_fields) {
    return model;
  }
  this.populated_fields.forEach(function (populated_field) {
    logger.info('service', 'unpopulate', populated_field, model[populated_field]);
    if (model[populated_field] !== undefined) {
      if (model[populated_field]._id !== undefined) {
        model[populated_field] = model[populated_field]._id;
      }
      if (Array.isArray(model[populated_field])) {
        var items = [];
        model[populated_field].forEach(function (currentItem) {
          items.push(currentItem._id);
        });
        model[populated_field] = items;
      }
      logger.info('service', 'unpopulate', populated_field, model[populated_field]);
    }
  });
  return model;
};

// GET
ModelService.prototype.list = function () {
  logger.info('service', this.model.modelName, 'list');
  return this._populate(this.model.find()).exec();
};

// GET by ID
ModelService.prototype.get = function (id) {
  logger.info('service', this.model.modelName, 'get');
  return this._populate(this.model.findById(id)).exec();
};

// POST
ModelService.prototype.create = function (object) {
  logger.info('service', this.model.modelName, 'create');
  return this.model.create(object);
};

// PUT
ModelService.prototype.update = function (id, object) {
  logger.info('service', this.model.modelName, 'update');
  object = this._unpopulate(object);
  logger.info(object);
  return this._populate(this.model.findByIdAndUpdate(id, object)).exec();
};

// DELETE
ModelService.prototype.remove = function (id) {
  logger.info('service', this.model.modelName, 'remove');
  return this.model.findByIdAndRemove(id).exec();
};

// DROP
ModelService.prototype.drop = function () {
  logger.info('service', this.model.modelName, 'drop');
  return this.model.collection.drop();
};

module.exports = ModelService;