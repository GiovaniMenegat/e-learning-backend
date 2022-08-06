const userService = require('../services/users.service');

const create = async (req, res) => {
    const { name, email, password } = req.body;

    const newUser = await userService.create(name, email, password);

    if (newUser.message) return res.status(400).json(newUser);

    return res.status(201).json(newUser);
}

const exclude = async (req, res) => {
    const { id } = req.params;

    const deleteUser = await userService.exclude(id);

    if (deleteUser && deleteUser.message) return res.status(400).json(deleteUser);

    return res.status(204).end();
}

const login = async (req, res) => {
    const { email, password } = req.body;

    const userLogin = await userService.login(email, password);

    if (userLogin.message) return res.status(400).json(userLogin);

    return res.status(200).json(userLogin);
}

module.exports = {
    create,
    login,
    exclude,
}