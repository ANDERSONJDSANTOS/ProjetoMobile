const passwordModel = require('../../models/password_model');
const crypto = require('../../libs/encrypt/crypto');

const mongoose = require('mongoose');

async function getOneUseCase(passwordId) {
  const idIsValid = mongoose.isValidObjectId(passwordId);
  if(!idIsValid) return false;

  const password = await passwordModel.findById(passwordId);
  if(!password) return false;

  filteredPassword = filterPasswordData(password);
  return filteredPassword;
}


function filterPasswordData(password) {
  return {
    id:password._id,
    tagId:password.tagId,
    name:password.name,
    url:password.url,
    password:decryptPassword(password.password)
  }
}


function decryptPassword(hash) {
  const secret = process.env.PASSWORDS_SECRET;
  const password = crypto.decrypt(hash, secret);
  return password;
}

module.exports = getOneUseCase;