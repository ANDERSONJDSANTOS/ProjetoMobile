const createUser = require('../../../use_cases/users/create');
const validator = require('../../../middlewares/validator');

const userSchema = require('./dto');
const express = require('express');

const route = express.Router();

route.post('/', validator(userSchema), handler);

async function handler(req, res) {
  const { email, username, password } = req.body;
  const userHasError = await createUser(email, username, password);

  if(!userHasError) return res.status(201).send();
  res.status(400).json(userHasError.error);
}

module.exports = route;