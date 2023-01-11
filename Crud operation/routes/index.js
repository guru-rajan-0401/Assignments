const express = require("express")
const router = express.Router();
const bookRouter = require("./books")
const authRouter = require("./auth")
const path = require("path");
const { route } = require("./books");

router.get('/',(req,res) => {
    res.render("index",{name:"guru"})
});
router.use("/book",bookRouter);
router.use('/auth',authRouter);
router.all("/*",(req,res) =>{
    res.sendFile(path.join(__dirname,"/../page/pnf.html"))
});

module.exports = router;