const { Class } = require('../database/models');

const getAll = async () => {
  const classes = await Class.findAll();

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