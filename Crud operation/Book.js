const { Schema, default: mongoose } = require("mongoose");
mongoose.set('strictQuery', false)

const BookSchema = new Schema({
    name :{
        type:String,
        required:true
    },
    author:String
});
module.exports.Schema= mongoose.model('movies',BookSchema)