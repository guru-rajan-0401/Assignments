const { Schema, default: mongoose } = require("mongoose");
mongoose.set('strictQuery', false)

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
email:{
        type:String,
        required: true,
        },
 password:{
    type:String,
    required: true,
       }
});
module.exports.schema2= mongoose.model("users",userSchema);