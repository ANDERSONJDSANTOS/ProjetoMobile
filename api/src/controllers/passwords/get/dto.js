const joi = require('joi');

const schema = joi.object().keys({
  tagId: joi.
    string().
    max(100).
    required().
    messages({
      'string.max':'Id da categoria deve ter no máximo 100 caracteries',
      'any.required':'Id da categoria não foi preenchido',
      'string.empty':'Id da categoria não foi preenchido'
    })
});

module.exports = schema;