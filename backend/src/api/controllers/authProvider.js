// // authController.js
// const googleAuthUseCase = require('../../core/usecases/googleauth');

// const googleSignIn = async (req, res) => {
//     try {
//         const { user, token } = await googleAuthUseCase.googleSignIn();

//         // Set Authorization header and return user data
//         res.setHeader('Authorization', `Bearer ${token}`);
//         res.status(200).json({ user, token });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// module.exports = {
//     googleSignIn,
// };
