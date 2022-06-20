const userModel = require('../../models/user_model');

async function logoutUseCase(userId) {
  const user = await userModel.findById(userId);
  if(!user.token) return false;
  return await logout(user);
}


async function logout(user) {
  user.token = '';
  await user.save();
  return true;
}

module.exports = logoutUseCase;