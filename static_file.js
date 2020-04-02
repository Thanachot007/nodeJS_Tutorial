var express = require("express");
var app = express();


app.use("/asset",express.static("asset"));

app.get("/", (req,res) => { 
    console.log("index");
});

app.listen(3000, () => { 
    console.log("Server start at 127.0.0.1:3000");
})