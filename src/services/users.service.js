const { User } = require('../database/models');
const jwt = require('jsonwebtoken');

const create = async (name, email, password) => {
    const validate = await User.findOne({ where: { email } });

    if (validate) return { message: 'Email já cadastrado' };

    const newUser = await User.create({ name, email, password });

    const token = jwt.sign(
        { userId: newUser.id, email },
        process.env.JWT_SECRET,
        { expiresIn: '7d', algorithm: 'HS256' },
    );

    return { token, email, name: newUser.name, id: newUser.id };
}

const exclude = async (id) => {
    const validate = await User.findOne({ where: { id } });

    if (!validate) return { message: 'Usuário não encontrado' };

    await User.destroy({ where: { id } });
}

const login = async (email, password) => {
    // TODO criptografar
    const userLogin = await User.findOne({ where: { email, password } });

    if (!userLogin) return { message: 'E-mail e/ou senha incorretos!' };
    
    const token = jwt.sign(
        { userId: userLogin.id, email },
        process.env.JWT_SECRET,
        { expiresIn: '7d', algorithm: 'HS256' },
    );

    return { token, name: userLogin.name };
}

module.exports = {
    create,
    login,
    exclude,
}