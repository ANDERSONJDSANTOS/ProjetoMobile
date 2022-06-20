const userModel = require('../../models/user_model');
const bcrypt = require('../../libs/encrypt/bcrypt');

async function createUserUseCase(email, name, password) {
  const emailExist = await verifyIfEmailAlreadyExists(email);
  if(emailExist) return emailExist;
  
  password = await encryptPassword(password);
  await createUser(email, name, password);
}


async function verifyIfEmailAlreadyExists(email) {
  const emailAlreadyExist = 'Esse email já está sendo utilizado';
  const userFound = await userModel.findOne({ email:email });
  if(userFound) return { error:emailAlreadyExist };
}


async function encryptPassword(password) {
  const rounds = 10;
  const hashedPassword = await bcrypt.hash(password, rounds);
  return hashedPassword;
}


async function createUser(email, name, password) {
  const user = userModel({
    email:email,
    name:name,
    password:password
  });

  await user.save();
}

module.exports = createUserUseCase;