const tagModel = require('../../models/tag_model');
const mongoose = require('mongoose');

async function deleteUseCase(tagId) {
  if(!tagId) return false;
  const idIsValid = mongoose.isValidObjectId(tagId);
  
  if(!idIsValid) return false;
  await tagModel.findByIdAndDelete(tagId);
  
  return true;
}

module.exports = deleteUseCase;