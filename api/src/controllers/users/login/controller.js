const validator = require('../../../middlewares/validator');
const loginUser = require('../../../use_cases/users/login');

const userSchema = require('./dto');
const express = require('express');

const route = express.Router();

route.post('/login', validator(userSchema), handler);

async function handler(req, res) {
  const { email, password } = req.body;
  const token = await loginUser(email, password);

  if('error' in token) return res.status(400).json(token.error);
  res.status(201).json(token);
}

module.exports = route;