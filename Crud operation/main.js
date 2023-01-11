const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const PORT = 8000;
const routes = require("./routes/index");
const connectDB = require("./database/db");
app.set('view engine', 'pug');

//auth
app.use(bodyParser.json());
app.use(routes);
connectDB().then(() =>{
app.listen(PORT, () => {
    console.log(`Server is running in ${PORT}`)
})
});




//event emmitter
/*const EventEmitter = require("events");
const myEvent = new EventEmitter();
myEvent.on("test-event", (name) => {
    console.log("this event is listening")
    console.log(name);
})

app.get('/', (req, res) => {
    myEvent.emit("test-event", { name: "guru" });
    res.send("hello World")
});*/