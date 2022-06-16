const mongose = require('mongoose')

const esquema = mongose.Schema

const senhaEsquema = new esquema({

  senha: {
    type: String,
    require: true,
    maxlength: 100,
  },

  idCategory: {
    type: String,
    require: true,
    maxlength: 100,
  },

  nome: {
    type: String,
    require: true,
    maxlength: 100,
  },

  url: {
    type: String,
    require: true,
    maxlength: 100,
  }

}) 


const senhaModel= mongose.models.senhas || mongose.model('senhas',senhaEsquema)

module.exports = senhaModel

