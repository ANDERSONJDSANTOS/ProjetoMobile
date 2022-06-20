const passwordModel = require('../../models/password_model');
const crypto = require('../../libs/encrypt/crypto');

const mongoose = require('mongoose');

async function getUseCase(tagId) {
  const idIsValid = mongoose.isValidObjectId(tagId);
  if(!idIsValid) return false;

  const passwords = await getPasswords(tagId);
  const filterdPasswords = filterPassword(passwords);

  return filterdPasswords;
}


async function getPasswords(tagId) {
  const passwords = await passwordModel.find({ tagId:tagId });
  return passwords;
} 


function filterPassword(passwords) {
  let passwordsFiltered = [];

  for(const password of passwords) {
    passwordsFiltered.push({
      id:password.id,
      name:password.name,
      password:decryptPassword(password.password),
      url:password.url,
      tagId:password.tagId
    });
  }

  return passwordsFiltered;
}


function decryptPassword(hash) {
  const secret = process.env.PASSWORDS_SECRET;
  const password = crypto.decrypt(hash, secret);
  return password;
}

module.exports = getUseCase;