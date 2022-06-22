const passwordModel = require('../../models/password_model');
const mongoose = require('mongoose');

async function deleteUseCase(id) {
  const idIsValid = mongoose.isValidObjectId(id);
  if(!idIsValid) return false;

  await passwordModel.findByIdAndDelete(id);
  return true;
}


module.exports = deleteUseCase;