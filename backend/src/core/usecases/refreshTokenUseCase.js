const jwtHelper = require('../../infrastructure/security/jwtHelper');

const refresh = async (refreshToken) => {
    try {
        const decoded = jwtHelper.verifyToken(refreshToken);
        if (decoded) {
            const token = jwtHelper.generateToken(decoded);
            return token;
        }
    } catch (error) {
        console.error('Error refreshing token:', error);
        return null;
    }
};

module.exports = {
    refresh
};