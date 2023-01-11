const express = require('express');
const authRouter=express();
const authcontroller=require('../authcontroller')

authRouter.post("/signup", authcontroller.signup)
authRouter.post("/login", authcontroller.login)

module.exports = authRouter