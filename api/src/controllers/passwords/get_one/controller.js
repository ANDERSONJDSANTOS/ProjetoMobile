const getAPassword = require('../../../use_cases/password/get_one');
const validator = require('../../../middlewares/validator');

const authUser = require('../../../middlewares/auth_user');
const passwordSchema = require('./dto');

const express = require('express');
const route = express.Router();

route.get('/:id', authUser, validator(passwordSchema, 'params'), handler);

async function handler(req, res) {
  const { id } = req.params;
  const password = await getAPassword(id);
  
  if(password) return res.status(200).json(password);
  res.status(400).json('Essa senha não foi encontrada');
}

module.exports = route;