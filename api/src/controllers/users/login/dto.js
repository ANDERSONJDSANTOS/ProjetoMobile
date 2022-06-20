const joi = require('joi');

const schema = joi.object().keys({
  email: joi.
    string().
    email().
    max(100).
    required().
    messages({
      'string.max':'Esse email não existe',
      'string.email':'Esse email não existe',
      'any.required':'Email não foi preenchido',
      'string.empty':'Email não foi preenchido'
    }),
    
  password: joi.
    string().
    min(7).
    max(30).
    required().
    messages({
      'string.max':'Senha errada',
      'string.min':'Senha errada',
      'any.required':'Senha não foi preenchida',
      'string.empty':'Senha não foi preenchida'
    })
});

module.exports = schema;