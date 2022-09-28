const { Rating } = require('../database/models');
const { Class } = require('../database/models');

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

const getRecommendation = async (userId) => {
  const ratingList = await Rating.findAll({
    where: {
      userId
    },
    include: { model: Class, as: 'classes', attributes: ['type'] },
  });

  if (!ratingList) return { message: 'Nenhuma recomendação' };

  if (ratingList.length < 11) {
    if (11-ratingList.length > 1) {
      return { message: `Ainda restam ${11-ratingList.length} aulas para você completar.` };
    } else {
      return { message: `Ainda resta ${11-ratingList.length} aula para você completar.` };
    }
  }

  let frontend = 0;
  let backend = 0;

  ratingList.forEach(({classes, rating}) => {
    if (rating === 1) {
      if (classes.type === "frontend") {
        frontend += 1;
      }
      if (classes.type === "backend") {
        backend += 1;
      }
    }
  });

  if (frontend>backend) {
    return "Front-end";
  } else if(backend>frontend) {
    return "Back-end";
  } else {
    return "Fullstack"
  }
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
  saveRating,
  getRecommendation
}