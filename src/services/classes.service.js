const { Class } = require('../database/models');
const { Rating } = require('../database/models');

const getAll = async (userId) => {
  let classes = await Class.findAll({
    include: { model: Rating, as: 'ratings', where:{ userId }, attributes: ['rating'], required:false },
  });

  if (!classes) return { message: 'Algo deu errado' };

  return { classes };
}

const getOne = async (id) => {
  const classes = await Class.findOne({where: { id }});

  if (!classes) return { message: 'Aula não encontrada' };

  return classes;
};

module.exports = {
  getAll,
  getOne
}