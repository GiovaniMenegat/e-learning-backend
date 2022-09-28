const ratingsService = require('../services/ratings.service');

const getRatingByClass = async (req, res) => {
  const { classId } = req.params;
  const { userId } = req.user;

  const ratings = await ratingsService.getRatingByClass(classId, userId);

  if (ratings.message) return res.status(400).json(ratings);

  return res.status(200).json(ratings);
};

const getRecommendation = async (req, res) => {
  const { userId } = req.user;

  const recommendation = await ratingsService.getRecommendation(userId);

  if (recommendation.message) return res.status(400).json(recommendation);

  return res.status(200).json(recommendation);
};

const saveRating = async (req, res) => {
  const { classId } = req.params;
  const { userId } = req.user;
  const { rating } = req.body;
  
  const newRating = await ratingsService.saveRating(classId, userId, rating);

  if (newRating.message) return res.status(400).json(newRating);

  return res.status(201).json(newRating);
}

module.exports = {
  getRatingByClass,
  saveRating,
  getRecommendation
}