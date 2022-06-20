const express = require('express');
const route = express.Router();

const getOne = require('../controllers/passwords/get_one/controller');
const create = require('../controllers/passwords/create/controller');

const update = require('../controllers/passwords/update/controller');
const del = require('../controllers/passwords/delete/controller');

const get = require('../controllers/passwords/get/controller');

route.use(getOne);
route.use(create);
route.use(update);
route.use(del);
route.use(get);

module.exports = route;