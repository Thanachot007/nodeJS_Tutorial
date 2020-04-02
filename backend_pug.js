var express = require("express");
var app = express();
var path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index", {
        title: "pug LAB",
        message : "Hello there"
    });
});


app.listen(3000,()=>{
    console.log("Server start at localhost:3000");
})
