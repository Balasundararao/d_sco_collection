var Schema = require('mongoose').Schema,
  ReleaseSchema;

ReleaseSchema = new Schema({
  engineer: {type: String, required: true},
  date:  {type: Date, required: true},
  duration: {type: String},
  task: {type: String},
  branch: {type: String},
  tag: {type: String},
  environment: {type: String},
  version: {type: String},
  name: {type: String},
  notes: {type: String}
});

module.exports = ReleaseSchema;
