const http = require('http');

http.createServer((req, res) => {
    res.write(`<!DOCTYPE html><html><body style="background-color:${process.env.APP_COLOR??'white'}">HELLO WORLD</body></html>`)
    res.end();
}).listen(3000);