const { Rating } = require('../database/models');

const getRatingByClass = async (classId, userId) => {
  const rating = await Rating.findOne({
    where: {
      classId,
      userId
    }
    // include: { model: Class, as: 'ratings', attributes: ['rating'], where: { userId } },
  });

  if (!rating) return { message: 'Rating não encontrado' };

  return rating;
};

const saveRating = async (classId, userId, rating) => {
  const validation = await Rating.findOne({
    where: {
      classId,
      userId
    }
  });

  if (validation) return { message: 'Rating já cadastrado' };
  
  const newRating = await Rating.create({ classId, userId, rating });

  return newRating;
}

module.exports = {
  getRatingByClass,
  saveRating
}