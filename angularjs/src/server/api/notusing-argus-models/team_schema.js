var Schema = require('mongoose').Schema,
  TeamSchema = new Schema({
    name: {type: String, required: true},
    imageUrl: {type: String},
    backlog: {type: String},
    backlogUrl: {type: String},
    productOwner: {type: Schema.ObjectId, ref: 'User'},
    scrumMaster: {type: Schema.ObjectId, ref: 'User'},
    members: [{type: Schema.ObjectId, ref: 'User'}],
    sprints: [{type: Schema.ObjectId, ref: 'Sprint'}]
  });

module.exports = TeamSchema;
