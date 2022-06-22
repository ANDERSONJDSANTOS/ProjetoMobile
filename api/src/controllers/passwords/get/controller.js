const getPasswords = require('../../../use_cases/password/get');
const validator = require('../../../middlewares/validator');

const authUser = require('../../../middlewares/auth_user');
const passwordSchema = require('./dto');

const express = require('express');
const route = express.Router();

route.get('/all/:tagId', authUser, validator(passwordSchema, 'params'), handler);

async function handler(req, res) {
  const { tagId } = req.params;
  const tags = await getPasswords(tagId);

  if(tags) return res.status(200).json(tags);
  res.status(400).json('Essa categoria não existe');
}

module.exports = route;