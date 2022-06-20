const updatePassword = require('../../../use_cases/password/update');
const validator = require('../../../middlewares/validator');
const authUser = require('../../../middlewares/auth_user');

const passwordSchema = require('./dto');
const express = require('express');

const route = express.Router();

route.put('/:id', authUser, validator(passwordSchema), handler);

async function handler(req, res) {
  const { name, url, password } = req.body;
  const { id } = req.params;
  const updated = await updatePassword(id, name, password, url);
  
  if(updated) return res.status(200).send();
  res.status(400).json('Essa senha não foi encontrada');
}

module.exports = route;