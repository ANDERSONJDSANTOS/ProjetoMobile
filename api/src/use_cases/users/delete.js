const userModel = require('../../models/user_model');

async function deleteUseCase(userId) {
  const user = await userModel.findByIdAndDelete(userId);
  return user;
}

module.exports = deleteUseCase;