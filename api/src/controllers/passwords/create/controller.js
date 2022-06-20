const createPassword = require('../../../use_cases/password/create');
const validator = require('../../../middlewares/validator');

const authUser = require('../../../middlewares/auth_user');
const passwordSchema = require('./dto');

const express = require('express');
const route = express.Router();

route.post('/', authUser, validator(passwordSchema), handler);

async function handler(req, res) {
  const { name, tagId, url, password } = req.body;
  const passwordWasNotCreated = await createPassword(name, password, url, tagId);
  if(!passwordWasNotCreated) return res.status(201).send();
  res.status(400).json(passwordWasNotCreated.error); 
}

module.exports = route;