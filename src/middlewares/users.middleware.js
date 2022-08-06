const passwordMiddleware = (req, res, next) => {
    const keys = Object.keys(req.body);
    const havePassword = keys.find((key) => key === 'password');

    if (!havePassword) return res.status(400).json({ message: '"password" is required' });

    const { password } = req.body;

    if (password.length === 0) {
        return res.status(400).json({ message: '"password" is not allowed to be empty' });
    }

    next();
}

const emailMiddleware = (req, res, next) => {
    const keys = Object.keys(req.body);
    const haveEmail = keys.find((key) => key === 'email');

    if (!haveEmail) return res.status(400).json({ message: '"email" is required' });

    const { email } = req.body;

    if (email.length === 0) {
        return res.status(400).json({ message: '"email" is not allowed to be empty' });
    }

    next();
}

const nameMiddleware = (req, res, next) => {
    const keys = Object.keys(req.body);
    const haveName = keys.find((key) => key === 'name');

    if (!haveName) return res.status(400).json({ message: '"name" is required' });

    const { name } = req.body;

    if (name.length === 0) {
        return res.status(400).json({ message: '"name" is not allowed to be empty' });
    }

    next();
}

module.exports = {
    passwordMiddleware,
    emailMiddleware,
    nameMiddleware,
}