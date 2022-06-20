const joi = require('joi');

const schema = joi.object().keys({
  name: joi
    .string()
    .max(30).
    required().
    messages({
      'string.max':'Nome deve ter menos de 30 caracteries',
      'any.required':'Nome não foi preenchido',
      'string.empty':'Nome não foi preenchido'
    }),

  email: joi.
    string().
    email().
    max(100).
    required().
    messages({
      'string.max':'Email deve ter menos de 100 caracteries',
      'string.email':'Email inválido',
      'any.required':'Email não foi preenchido',
      'string.empty':'Email não foi preenchido'
    }),
    
  password: joi.
    string().
    min(7).
    max(30).
    required().
    messages({
      'string.max':'Senha deve ter no máximo 30 caracteries',
      'string.min':'Senha deve ter no mínimo 7 caracteries',
      'any.required':'Senha não foi preenchida',
      'string.empty':'Senha não foi preenchida'
    })
});

module.exports = schema;