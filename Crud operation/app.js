//creating a server
const http = require('http');
const fs = require("fs");
const PORT = 3007;
const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.writeHead(200,{"content-type":"text/html"});
        fs.readFile("page/home.html","utf-8",(err,data) =>{
            if (err) throw err;
            res.write(data);
            res.end();
        } ) 
    }
   else if(req.url === "/about"){
        res.writeHead(200,{"content-type":"text/html"});
        fs.readFile("page/about.html","utf-8",(err,data) =>{
            if (err) throw err;
            res.write(data);
            res.end();
        } ) 
    }
    //append file 
    else if(req.url === "/create-file"){
        res.writeHead(200,{"content-type":"text/html"});
        const data = "This is the file";
        fs.appendFile("temp/text.html",data,(err) =>{
            if (err) throw err;
            res.write("This is creating page");
            res.end();
        } ) 
    }
    else {
        res.writeHead(200,{"content-type":"text/html"});
        fs.readFile("page/pnf.html","utf-8",(err,data) =>{
            if (err) throw err;
            res.write(data);
            res.end();
        } ) 
    }
})
server.listen(PORT);

/*exporting modules 
const Circle = require('./main1');
const circle = new Circle();

console.log(circle.area(5));
console.log(circle.circumference(76))

//file system
const fs = require('fs');*/
