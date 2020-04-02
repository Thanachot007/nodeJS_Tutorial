var express = require("express");
var app = express();

app.get("/", (req, res)=>{
    res.send("error handling");
})
app.get("/data/:user_id", (req, res)=>{
    res.send("user_id"+user_id);
 })
app.use(function(req, res, next){ 
    var err = new Error("Page not found");
    err.status = 404;
    next(err);
})
app.use(function(err,req, res,next){
  console.error(err.stack);
  res.status(err.status).send(err.message);
});
app.listen(3000, () => { 
    console.log("Server start at localhost:3000");
})