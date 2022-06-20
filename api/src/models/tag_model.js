const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const tagSchema = new Schema({
  name: {
    type: String,
    require: true,
    maxlength: 20,
  },

  icon: {
    type: String,
    require: true,
    maxlength: 20,
  },

  background: {
    type: String,
    require: true,
    maxlength: 20,
  },
  
  userId: {
    type: mongoose.Types.ObjectId,
    require:true,
    maxLength:100
  }
 },
 {
   timestamps: true
 });

const tagModel = mongoose.models.tags || mongoose.model('tags', tagSchema);

module.exports = tagModel;