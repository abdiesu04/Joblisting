const mongoose = require('mongoose');
const config = require('../../config/config');

const connectDB = async () => {
    try{
        await mongoose.connect(config.mongoURI , {
            useNewUrlParser : true , 
            useUnifiedTopology : true , 
        }) ;
        console.log('MongDB Connected...');
    } catch (error){
        console.error("mongoDB connection Error : " , process.exit(1))
    }
};

module.exports = connectDB