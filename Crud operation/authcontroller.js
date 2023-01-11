const guru = require("./models/user");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const saltRounds =10;

exports.signup = async function(req,res){
    const password = await bcrypt.hash(req.body.password,saltRounds);
    const data ={...req.body,password};
    const users=await guru.schema2.create(data)
    res.send(users);
}
exports.login = async (req,res) => {
    const detail = await guru.schema2.findOne({ email: req.body.email});
    if(!detail){
        res.status(404).json({ error:"user not found"});
     return;
    }

    if(!(await bcrypt.compare(req.body.password,detail.password)))
{
res.status(404).json({error :"USer not found"});
return;
}

const token = await jwt.sign({detail},"fake-jwtsec")
res.json({detail,access_token:token});
}