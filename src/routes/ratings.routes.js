const route = require('express').Router();
const ratingsControllers = require('../controllers/ratings.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');

route.get('/:classId', authMiddleware, ratingsControllers.getRatingByClass);
route.post('/:classId', authMiddleware, ratingsControllers.saveRating);

module.exports = route;
