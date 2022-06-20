const tagModel = require('../../models/tag_model');
const mongoose = require('mongoose');

async function updateUseCase(id, name, icon, background) {
  const idIsInvalid = validateId(id);
  if(idIsInvalid) return idIsInvalid.error;

  await tagModel.findByIdAndUpdate(id, {
    name:name,
    icon:icon,
    background:background
  });
}


function validateId(id) {
  if(!id) return { error:'Id não foi enviado' };
  const idIsValid = mongoose.isValidObjectId(id);
  if(!idIsValid) return { error:'id inválido' };
}

module.exports = updateUseCase;