var http = require("http");
var fs = require("fs");

http.createServer((req, res) => {
    fs.readFile("demo.html",(err,data) => {
        if (err) console.error(err);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    });
}).listen(8081);
console.log("running on http://127.0.0.1:8081");