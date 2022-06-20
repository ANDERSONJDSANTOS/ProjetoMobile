const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const passwordSchema = new Schema({

  password: {
    type: Object,
    require: true,
    maxlength: 100,
  },

  tagId: {
    type: mongoose.Types.ObjectId,
    require: true,
    maxlength: 100,
  },

  name: {
    type: String,
    require: true,
    maxlength: 30,
  },

  url: {
    type: String,
    require: true,
    maxlength: 100,
  }
},
{
  timestamps: true
}); 

const passwordModel = mongoose.models.passwords || mongoose.model('passwords', passwordSchema);

module.exports = passwordModel;