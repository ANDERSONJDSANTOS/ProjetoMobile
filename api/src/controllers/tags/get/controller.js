const authUser = require('../../../middlewares/auth_user');
const getTags = require('../../../use_cases/tags/get');

const express = require('express');
const route = express.Router();

route.get('/', authUser, handler);

async function handler(req, res) {
  const { id } = req.user;
  const tags = await getTags(id);
  res.status(200).json(tags);
}

module.exports = route;