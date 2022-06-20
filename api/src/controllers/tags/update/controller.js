const updateTag = require('../../../use_cases/tags/update');
const validator = require('../../../middlewares/validator');

const authUser = require('../../../middlewares/auth_user');
const tagSchema = require('./dto');

const express = require('express');
const route = express.Router();

route.put('/:id', authUser, validator(tagSchema), handler);

async function handler(req, res) {
  const { id } = req.params;
  const { name, icon, background } = req.body;

  const tagWasntUpdated = await updateTag(id, name, icon, background);
  if(tagWasntUpdated) return res.status(400).json(tagWasntUpdated.error);

  res.status(200).send();
}

module.exports = route;