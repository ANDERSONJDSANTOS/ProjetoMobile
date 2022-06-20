const createTag = require('../../../use_cases/tags/create');
const validator = require('../../../middlewares/validator');

const authUser = require('../../../middlewares/auth_user');
const tagSchema = require('./dto');

const express = require('express');
const route = express.Router();

route.post('/', authUser, validator(tagSchema), handler);

async function handler(req, res) {
  const { name, icon, background } = req.body;
  const { id } = req.user;

  await createTag(name, icon, background, id);
  res.status(201).send();
}

module.exports = route;