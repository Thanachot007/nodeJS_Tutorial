var http = require("http");
var url = require("url");
http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    console.log('request',request.url);
    // console.log('request.header',request.headers);
    var q = url.parse(request.url, true).query
    console.log(q.fname+" "+q.lname);
    response.write(q.fname + " " + q.lname+"\n");
    response.end("Hello world.\n");
}).listen(8081);
    console.log("Server running at http://127.0.0.1:8081")