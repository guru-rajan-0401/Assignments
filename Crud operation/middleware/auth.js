const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
const users = require("../models/user")

const auth = async (req,res,next) =>{
    if(
        req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(" ")[1]

    ){
        console.log(req.headers.authorization);
        const token = req.headers.authorization.split(" ")[1];
            try{
                const decode = await jwt.verify(token,"fake-jwtsec");
                 await users.schema2.findOne({ _id: ObjectId(decode.users_id)});
                next();
            } catch(error){
                res.json("unauthorization")
                console.log(error)
            }
    }

};

module.exports = auth;