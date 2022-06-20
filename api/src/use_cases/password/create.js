const passwordModel = require('../../models/password_model');
const tagModel = require('../../models/tag_model');

const crypto = require('../../libs/encrypt/crypto');
const mongoose = require('mongoose');

async function createUseCase(name, password, url, tagId) {
  const tagExist = await verifyIfTagExists(tagId);
  if(!tagExist) return tagDoesntExist();
  password = encryptPassword(password);
  await createPassword(name, password, url, tagId);
}


async function verifyIfTagExists(tagId) {
  const idIsValid = mongoose.isValidObjectId(tagId);
  if(!idIsValid) return false;
  return tagModel.findById(tagId);
}


function tagDoesntExist() {
  const tagIdInvalid = 'Essa categoria não existe';
  return { error:tagIdInvalid };
}


function encryptPassword(password) {
  const secret = process.env.PASSWORDS_SECRET;
  const hash = crypto.encrypt(password, secret); 
  return hash;
}


async function createPassword(name, password, url, tagId) {
  const passwordData = await passwordModel({
    name:name,
    password:password,
    url:url,
    tagId:tagId
  });

  await passwordData.save();
}

module.exports = createUseCase;