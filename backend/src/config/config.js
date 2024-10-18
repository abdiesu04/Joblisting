require('dotenv').config() // load environment variables

module.exports = {
    jwtSecret : process.env.JWT_SECRET || "supersecretkey",
    jwtExpiration : process.env.JWT_EXPIRATION || '1h' , 
    mongoURI : process.env.MONGO_URI || "mongodb://localhost:27017/joblisting"
}