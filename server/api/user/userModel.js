const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  }
});

module.exports = mongoose.model('user', UserSchema);
