// // googleAuthUseCase.js
// const firebase = require('../../core/repositories/firebase'); // Firebase config

// const googleSignIn = async () => {
//     // Set up Google Auth Provider
//     const provider = new firebase.auth.GoogleAuthProvider();

//     try {
//         const result = await firebase.auth().signInWithPopup(provider);

//         // This gives you a Google Access Token.
//         const token = result.credential.accessToken;

//         // The signed-in user info.
//         const user = result.user;

//         return { user, token }; // Return user and token to the controller
//     } catch (error) {
//         throw new Error('Google sign-in failed: ' + error.message);
//     }
// };

// module.exports = {
//     googleSignIn,
// };
