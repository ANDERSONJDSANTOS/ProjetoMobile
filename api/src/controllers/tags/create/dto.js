const joi = require('joi');

const schema = joi.object().keys({
  name: joi
    .string()
    .max(20).
    required().
    messages({
      'string.max':'Nome deve ter no máximo 20 caracteries',
      'any.required':'Nome não foi preenchido',
      'string.empty':'Nome não foi preenchido'
    }),

  icon: joi.
    string().
    max(20).
    equal('music','envelope-o', 'heart', 'home', 'photo',
    'twitter-square', 'facebook-square', 'linkedin-square', 'github','credit-card',
    'google-plus', 'dashboard', 'building', 'cloud-upload', 'desktop', 'tablet',
    'youtube-play', 'bank', 'spotify','share-alt-square','amazon','shopping-bag',
    'telegram', 'file','legal','money','gears','signal','suitcase','code').
    required().
    messages({
      'string.max':'Icone inválido',
      'any.required':'Icone não foi preenchido',
      'any.only':'Icone inválido',
      'string.empty':'Icone não foi preenchido'
    }),
    
  background: joi.
    string().
    max(20).
    equal('red', 'yellow', 'green', 'purple', 'pink', 'brown', 'orange', 'maroon',
    'blue').
    required().
    messages({
      'string.max':'Cor de fundo inválida',
      'any.only':'Cor de fundo inválida',
      'any.required':'Cor de fundo não foi preenchida',
      'string.empty':'Cor de fundo não foi preenchida'
    })
});

module.exports = schema;