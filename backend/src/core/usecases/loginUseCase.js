const userRepository = require('../repositories/userRepository');
const jwthelper  = require('../../infrastructure/security/jwtHelper');

const login = async (email, password) => {
    const user = await userRepository.findUserByEmail(email);
    if (!user) {
        throw new Error('User Not Found');
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
        throw new Error('Password is Invalid');
    }
    const token = jwthelper.generateToken(user);
    const refreshToken = jwthelper.generateRefreshToken(user);
    if (typeof window !== 'undefined') {
        localStorage.setItem('refreshtoken', refreshToken);
    }

    return { token, refreshToken, user };
};

module.exports = {
    login
};