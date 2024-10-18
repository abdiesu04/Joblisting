const registerUseCase = require('../../core/usecases/registerUseCase');
const loginUseCase = require('../../core/usecases/loginUseCase');

const register = async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await registerUseCase(userData);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await loginUseCase(email, password);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    register,
    login
};
