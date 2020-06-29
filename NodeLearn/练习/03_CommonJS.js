var http = require('http');

var tools1 = require('sinpo');

http.createServer((req, res) => {
    res.writeHead(200,{
        'Content-Type': 'text/html;charset=UTF-8'
    });
    res.write('<h1 style="text-align:center"></h1>');
    console.log(tools1.multiply(1,2,3));
    res.end();
}).listen(3000);