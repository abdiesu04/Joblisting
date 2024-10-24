const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcrypt');

const register  = async (userData) =>{
    if (!userData.username || !userData.email || !userData.password) {
        throw new Error('Missing required fields');
    }
    console.log(userData.password)
    
    userData.password = await bcrypt.hash(userData.password , 10)
    const user  = await userRepository.findUserByEmail(userData.email)
    if (user) {
        throw new Error('User Already Exists')
    }

    try{
        userRepository.createUser(userData)
    } catch (error){
        throw new Error('User Registraion Failed' + error.message)
    }
}


module.exports = {
    register
}