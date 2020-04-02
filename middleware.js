var express = require("express");
var app = express();

// var myLog = ((req, res, next) => {
//     console.log("myLogger Time:", Date.now());
//     next();
// });
// app.use(myLog);
var requestTime = ((req, res, next) => {
    req.requestTime = Date.now();
    next();
})
app.use(requestTime);
app.get("/", (req, res) => {
    var responseText = "<h1> Value form Middleware </h1><br>";
    res.send(responseText + "Date now is : " + req.requestTime);
});

app.listen(3000, () => {
    console.log("server start at port 3000");
});