const jwt = require('jsonwebtoken');
const config = require('../../config/config');

const generateToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email,
        username: user.username,
    };
    return jwt.sign(payload, config.jwtSecret, { expiresIn: config.jwtExpiration });
};

const verifyToken = (token) => {
    return jwt.verify(token, config.jwtSecret);
};

module.exports = {
    generateToken,
    verifyToken
};
