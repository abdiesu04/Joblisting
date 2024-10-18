const user  = require('../domain/user')



const createUser = async (userData) => {
    const user = new User(userData)
    return await user.save();
}

const findUserByEmail = async (email) =>{
    return await user.findOne({email})
}

const findUserByID = async (id) => {
    return await user.findOne(id)
}

module.exports = {
    createUser , 
    findUserByEmail , 
    findUserByID
}