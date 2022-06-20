const express = require('express');
const route = express.Router();

const passwordControllers = require('./src/routes/password_routes');
const userControllers = require('./src/routes/user_routes');
const tagControllers = require('./src/routes/tag_routes');

route.use('/users', userControllers);
route.use('/tags', tagControllers);
route.use('/passwords', passwordControllers);

module.exports = route;