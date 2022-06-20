const joi = require('joi');

const schema = joi.object().keys({
  id: joi.
    string().
    max(100).
    required().
    messages({
      'string.max':'Id da senha deve ter no máximo 100 caracteries',
      'any.required':'Id da senha não foi preenchido',
      'string.empty':'Id da senha não foi preenchido'
    })
});

module.exports = schema;