const deleteUser = require('../../../use_cases/users/delete');
const authUser = require('../../../middlewares/auth_user');

const express = require('express');
const route = express.Router();

route.delete('/', authUser, handler);

async function handler(req, res) {
  const { id } = req.user;
  const userWasDeleted = await deleteUser(id);
  
  if(userWasDeleted) return res.status(204).send();
  res.status(400).json('Usuário não existe');
}

module.exports = route;