const userRepository = require('../repositories/userRepository');
const jwthelper  = require('../../infrastructure/security/jwtHelper');

const login = async (email, password) => {
    const user = await userRepository.findUserByEmail(email)
    if (!user) {
        throw new Error('User Not Found')
    }
    const isPasswordVlaid = await user.comparePassword(password)
    if (!isPasswordVlaid) {
        throw new Error('Password is Invalid')
    }
    token = jwthelper.generateToken(user)
    return {token , user}
}
module.exports = {
    login
}