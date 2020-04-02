var express = require("express");
var app = express();
var name = (req,res,next)=>{ 
    console.log("Thanachot");
    next();
}
var lname = (req,res,next)=>{ 
    console.log("Tesjaroen");
    next();
}
var address = (req,res)=>{ 
    console.log("KKU");
}

app.get("/", (req, res) => {
    res.send("Hello world");
});
app.get("/users/:userId", (req,res) => {
    res.send(req.params);
});
app.get("/users/:userId/:userName", (req,res) => {
    res.send(req.params.userId);
});
app.get("/user_information", [name, lname, address]);

app.listen(3000, () => {
    console.log("Server start at 127.0.0.1:3000");
});