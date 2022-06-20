const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    maxlength: 100,
    unique: true,
  },

  password: {
    type: String,
    require: true,
    maxlength: 100,
  },

  name: {
    type: String,
    require: true,
    maxlength: 20,
  },

  token: {
    type: String,
    maxlength: 100,
  }
},
{
  timestamps: true
});

const userModel = mongoose.models.users || mongoose.model('users', userSchema);

module.exports = userModel;