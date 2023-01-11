const mongoose = require ("mongoose");
mongoose.set('strictQuery', false)

async function connectDB(){
    await mongoose.connect("mongodb://localhost:27017/nodejs_crud");
}

module.exports = connectDB;