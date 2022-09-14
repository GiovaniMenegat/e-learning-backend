const route = require('express').Router();
const classControllers = require('../controllers/classes.controller');

route.get('/', classControllers.getAll);
route.get('/:id', classControllers.getOne);

module.exports = route;
