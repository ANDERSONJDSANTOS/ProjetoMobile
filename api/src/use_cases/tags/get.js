const tagModel = require('../../models/tag_model');

async function getUseCase(userId) {
  const tags = await tagModel.find({ userId:userId });
  const filteredTags = filterTags(tags);
  return filteredTags;
}


function filterTags(tags) {
  let filteredTags = [];

  for(tag of tags) {
    filteredTags.push({
      id:tag._id,
      name:tag.name,
      icon:tag.icon,
      background:tag.background,
      userId:tag.userId
    });
  }

  return filteredTags;
}

module.exports = getUseCase;