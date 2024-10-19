const registerUsecase = require('../../core/usecases/registerUseCase');

const register = async (req, res) => {
    try {
        await registerUsecase.register(req.body);
        res.status(201).json({ message: 'User Created' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    register
};