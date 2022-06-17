const mongose = require('mongoose')

const esquema = mongose.Schema

const userEsquema = new esquema({
  email: {
    type: String,
    require: true,
    maxlength: 100,
    unique: true,
  },

  senha: {
    type: String,
    require: true,
    maxlength: 100,
  },

  nome: {
    type: String,
    require: true,
    maxlength: 20,

  },

  token: {
    type: String,
    maxlength: 100,
  }

}) 


const userModel= mongose.models.usuarios || mongose.model('usuarios',userEsquema)

module.exports = userModel

