var http = require("http");
var fs = require("fs");
var url = require("url");
http.createServer((req, res) => {
    var q = url.parse(req.url);
    fs.readFile("." + q.pathname, (err, data) => {
        
        if (err) {
            fs.readFile("404.html", (err, data) => {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.write(data.toString());
                res.end();
            })

        }else{
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data.toString());
        res.end();}
    })
}).listen(8081);
