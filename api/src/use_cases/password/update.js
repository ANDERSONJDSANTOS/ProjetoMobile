const passwordModel = require('../../models/password_model');
const crypto = require('../../libs/encrypt/crypto');

const mongoose = require('mongoose');

async function updateUseCase(id, name, password, url) {
  const idIsValid = mongoose.isValidObjectId(id);
  if(!idIsValid) return false;

  password = encryptPassword(password);
  await updatePasswordData(id, name, password, url); 

  return true;
}


function encryptPassword(password) {
  const secret = process.env.PASSWORDS_SECRET;
  const hash = crypto.encrypt(password, secret); 
  return hash;
}


async function updatePasswordData(id, name, password, url) {
  await passwordModel.findByIdAndUpdate(id, {
    name:name,
    password:password,
    url:url
  });
}

module.exports = updateUseCase;