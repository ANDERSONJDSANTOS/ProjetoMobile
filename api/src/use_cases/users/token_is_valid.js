const userModel = require('../../models/user_model');
const bcrypt = require('../../libs/encrypt/bcrypt');

const jwt = require('../../libs/token/jwt');

async function userTokenIsValid(token) {
  const tokenData = getTokenData(token);
  if('error' in tokenData) return tokenData;

  const user = await getUserData(tokenData.id);
  if(!user) return invalidToken();
  
  if(!user.token) return tokenExpired();
  const userHasThisToken = await verifyIfUserHasThisToken(user, token);
  
  if(userHasThisToken) return user;
  return invalidToken();
}


function getTokenData(token) {
  const secret = process.env.JWT_LOGIN_SECRET;
  const user = jwt.validate(token, secret);
  return user;
}


async function getUserData(userId) {
  const user = await userModel.findById(userId);
  return user;
}


async function verifyIfUserHasThisToken(user, token) {
  const tokenMatch = await bcrypt.compare(token, user.token);
  return tokenMatch;
}


function invalidToken() {
  const tokenIsInvalid = 'Token inválido';
  return { error:tokenIsInvalid };
}


function tokenExpired() {
  const tokenExpired = 'Esse token expirou';
  return { error:tokenExpired };
}

module.exports = userTokenIsValid;