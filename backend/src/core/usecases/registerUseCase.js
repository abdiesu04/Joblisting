const userRepository = require('../repositories/userRepository');

const registerUser = async (userData) => {
    const existingUser = await userRepository.findUserByEmail(userData.email);
    if (existingUser) throw new Error('User already exists');
    return await userRepository.createUser(userData);
};

module.exports = registerUser;
