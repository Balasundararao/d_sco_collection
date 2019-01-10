var Schema = require('mongoose').Schema,
  UserSchema;

UserSchema = new Schema({
  email: {type: String, required: true},
  name:  {type: String, required: true},
  login:  {type: String, required: true}
});

module.exports = UserSchema;
