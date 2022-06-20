const tagModel = require('../../models/tag_model');

async function createUseCase(name, icon, background, userId) {
  const tag = tagModel({
    name:name,
    icon:icon,
    background:background,
    userId:userId
  });

  await tag.save();
}

module.exports = createUseCase;