const route = require('express').Router();
const userController = require('../controllers/users.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const { 
    passwordMiddleware, 
    emailMiddleware, 
    nameMiddleware 
} = require('../middlewares/users.middleware');

route.post(
    '/', 
    passwordMiddleware, 
    emailMiddleware, 
    nameMiddleware, 
    userController.create
);

route.post(
    '/login', 
    passwordMiddleware, 
    emailMiddleware, 
    userController.login
);

route.delete(
    '/:id', 
    userController.exclude
);

module.exports = route;