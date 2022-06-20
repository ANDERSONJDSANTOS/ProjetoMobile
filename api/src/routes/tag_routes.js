const express = require('express');
const route = express.Router();

const create = require('../controllers/tags/create/controller');
const update = require('../controllers/tags/update/controller');

const del = require('../controllers/tags/delete/controller');
const get = require('../controllers/tags/get/controller');

route.use(create);
route.use(update);
route.use(get);
route.use(del);

module.exports = route;