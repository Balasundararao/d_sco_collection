var Schema     = require('mongoose').Schema,
  SprintSchema   = new Schema({
    name: {type: String},
    goal: {type: String},
    mql:  {type: String},
    wallUrl: {type: String},
    startDate: {type: Date},
    endDate: {type: Date}
  });

module.exports = SprintSchema;
