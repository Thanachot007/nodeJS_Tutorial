var express = require("express");
var app = express(); 

var users = require("./express_router"); 

app.use("/data", users);

app.listen(3000, () => {
    console.log("Server running at 127.0.0.1:3000");
});
