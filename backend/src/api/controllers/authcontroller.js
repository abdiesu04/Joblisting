const registerUsecase = require('../../core/usecases/registerUseCase');
const loginUseCase = require('../../core/usecases/loginUseCase');
const refreshTokenUseCase = require('../../core/usecases/refreshTokenUseCase');
const cookieParser = require('cookie-parser');

const register = async (req, res) => {
    try {
        await registerUsecase.register(req.body);
        res.status(201).json({ message: 'User Created' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { token, refreshToken, user } = await loginUseCase.login(req.body.email, req.body.password);
        res.setHeader('Authorization', `Bearer ${token}`);
        res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true, sameSite: 'Strict' });
        res.status(200).json({token ,  refreshToken, user });
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const refresh = async (req, res) => {
    const refreshToken = req.cookies ? req.cookies.refreshToken : null;
    console.log(refreshToken);

    if (!refreshToken) {
        return res.status(401).json({ error: 'No token provided' });
    }

    try {
        const newToken = await refreshTokenUseCase.refresh(refreshToken);
        res.setHeader('Authorization', `Bearer ${newToken}`);
        res.status(200).json({ message: 'Token refreshed' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    register,
    login,
    refresh
};