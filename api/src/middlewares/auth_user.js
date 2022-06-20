const verifyIfUserHasToken = require('../use_cases/users/token_is_valid');

async function authUser(req, res, next) {
  const mustPassWithoutCheck = verifyIfMustPassWithoutCheck(req);
  if(mustPassWithoutCheck) return next();

  const token = req.headers['authorization'] || req.headers['Authorization'];
  if(!token) return res.status(400).json('Token não foi enviado');

  const user = await verifyIfUserHasToken(token);
  if('error' in user) return res.status(403).json(user.error);

  req.user = user;
  next();
}


function verifyIfMustPassWithoutCheck(req) {
  const isInDev = process.env.MODE === 'dev';
  const sentTestCode = req.headers['test_code'];
  
  const testCode = process.env.TEST_CODE;
  const testCodeIsRight = testCode === sentTestCode;

  return isInDev && testCodeIsRight;
}

module.exports = authUser;