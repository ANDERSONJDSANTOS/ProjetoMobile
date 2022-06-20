const authUser = require('../../../middlewares/auth_user');
const logout = require('../../../use_cases/users/logout');

const express = require('express');
const route = express.Router();

route.delete('/logout', authUser, handler);

async function handler(req, res) {
  const { id } = req.user;
  const userWasLogout = await logout(id);

  if(userWasLogout) return res.status(204).send();
  res.status(400).json('Você não está logado');
}

module.exports = route;