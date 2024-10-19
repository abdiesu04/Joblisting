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

const generateRefreshToken = (user) => {
    const payload = {
        id: user._id,
    };
    return jwt.sign(payload, config.jwtSecret, { expiresIn: '72h' });
}

const verifyToken = (token) => {
    return jwt.verify(token, config.jwtSecret);
};

module.exports = {
    generateToken,
    verifyToken , 
    generateRefreshToken
};
