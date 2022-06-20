const deleteTag = require('../../../use_cases/tags/delete');
const authUser = require('../../../middlewares/auth_user');

const express = require('express');
const route = express.Router();

route.delete('/:id', authUser, handler);

async function handler(req, res) {
  const { id } = req.params;
  const tagWasDeleted = await deleteTag(id);

  if(tagWasDeleted) return res.status(204).send();
  res.status(400).json('Essa categoria não existe');
}

module.exports = route;