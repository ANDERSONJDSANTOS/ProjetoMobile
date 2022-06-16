const mongose = require('mongoose')

const esquema = mongose.Schema

const categoriaEsquema = new esquema({
  nome: {
    type: String,
    require: true,
    maxlength: 20,
  },

  icon: {
    type: String,
    require: true,
    maxlength: 20,
  },

  cor_de_fundo: {
    type: String,
    require: true,
    maxlength: 20,
  }

 }) 

const categoriasModel= mongose.models.categorias || mongose.model('categorias',categoriaEsquema)

module.exports = categoriasModel

