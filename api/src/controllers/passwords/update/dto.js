const joi = require('joi');

const schema = joi.object().keys({
  name: joi
    .string()
    .max(30).
    required().
    messages({
      'string.max':'Nome deve ter no máximo 30 caracteries',
      'any.required':'Nome não foi preenchido',
      'string.empty':'Nome não foi preenchido'
    }),

  password: joi.
    string().
    max(50).
    required().
    messages({
      'string.max':'Senha deve ter no máximo 50 caracteries',
      'any.required':'Senha não foi preenchida',
      'string.empty':'Senha não foi preenchida'
    }),
    
  url: joi.
    string().
    max(100).
    required().
    messages({
      'string.max':'Url deve ter no máximo 100 caracteries',
      'any.required':'Url não foi preenchida',
      'string.empty':'Url não foi preenchida'
    }),
});

module.exports = schema;