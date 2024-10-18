const userRepository = require('../repositories/userRepository');
const jwtHelper = require('../../infrastructure/security/jwtHelper');

const loginUser = async (email, password) => {
    const user = await userRepository.findUserByEmail(email);
    if (!user) throw new Error('Invalid email or password');

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) throw new Error('Invalid email or password');

    return jwtHelper.generateToken(user);
};

module.exports = loginUser;
