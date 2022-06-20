const express = require('express');
const route = express.Router();

const create = require('../controllers/users/create/controller');
const logout = require('../controllers/users/logout/controller');

const remove = require('../controllers/users/delete/controller');
const login = require('../controllers/users/login/controller');

route.use(create);
route.use(logout);
route.use(remove);
route.use(login);

module.exports = route;