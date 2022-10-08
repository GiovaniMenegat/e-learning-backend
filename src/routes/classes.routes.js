const route = require('express').Router();
const classControllers = require('../controllers/classes.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');

route.get('/', authMiddleware, classControllers.getAll);
route.get('/:id', classControllers.getOne);

module.exports = route;
