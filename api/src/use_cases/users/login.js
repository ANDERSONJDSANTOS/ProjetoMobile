const userModel = require('../../models/user_model');
const bcrypt = require('../../libs/encrypt/bcrypt');

const jwt = require('../../libs/token/jwt');

async function loginUserUseCase(email, password) {
  const userFound = await getUserByEmail(email);
  if(!userFound) return emailDoesntExists();

  const passwordIsCorrect = await passwordMatch(password, userFound.password);
  if(!passwordIsCorrect) return wrongPassword();
  
  const token = await createUserToken(userFound);
  await saveToken(userFound, token.hash);

  return { token:token.plain };
}


async function getUserByEmail(email) {
  const userFound = await userModel.findOne({ email:email });
  return userFound; 
}


function emailDoesntExists() {
  const emailDoesntExists = 'Esse email não existe';
  return { error:emailDoesntExists }
}


async function passwordMatch(planPassword, hashedPassword) {
  const match = await bcrypt.compare(planPassword, hashedPassword);
  return match;
}


function wrongPassword() {
  const wrongPassword = 'Senha errada';
  return { error:wrongPassword };
}


async function createUserToken(user) {
  const secret = process.env.JWT_LOGIN_SECRET;
  const userData = { id:user._id, email:user.email, name:user.name };
  const rounds = 10;

  const token = jwt.create(userData, secret);
  const hashToken = await bcrypt.hash(token, rounds);
  
  return {
    plain:token,
    hash:hashToken
  }
}


async function saveToken(user, token) {
  user.token = token;
  await user.save();
}

module.exports = loginUserUseCase;