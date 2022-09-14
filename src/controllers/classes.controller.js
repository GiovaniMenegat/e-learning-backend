const classService = require('../services/classes.service');

const getAll = async (req, res) => {
  const classes = await classService.getAll();

  if (classes.message) return res.status(400).json(classes);

  return res.status(200).json(classes);
};

const getOne = async (req, res) => {
  const { id } = req.params;

  const singleClass = await classService.getOne(id);

  if (singleClass.message) return res.status(400).json(singleClass);

  return res.status(200).json(singleClass);
};

module.exports = {
  getAll,
  getOne
}