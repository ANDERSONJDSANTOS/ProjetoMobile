const jwt = require('jsonwebtoken');

module.exports = {

  create(data, secret, expireIn='24h') {
    const option = { expiresIn:expireIn };
    const token = jwt.sign(data, secret, option);
    return token;
  },

  
  validate(token, secret) {
    let tokenData = {};

    jwt.verify(token, secret, (err, data) => {
      if(err) return { error:'Token expirou ou é inválido' };
      tokenData = data;
    });

    return tokenData;
  }
}