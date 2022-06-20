const deletePassword = require('../../../use_cases/password/delete');
const validator = require('../../../middlewares/validator');

const authUser = require('../../../middlewares/auth_user');
const passwordSchema = require('./dto');

const express = require('express');
const route = express.Router();

route.delete('/:id', authUser, validator(passwordSchema, 'params'), handler);

async function handler(req, res) {
  const { id } = req.parms;
  const deleted = await deletePassword(id);

  if(deleted) return res.status(204).send();
  res.status(400).json('Essa senha não existe');
}

module.exports = route;