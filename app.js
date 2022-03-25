const { fstat } = require('fs');
const http  = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Mesage </title></head>');
        res.write('<body><form action="/message" method="POST><input type="text" name="message"></body>');
        res.write('</html>');
        return res.end();
    }
    if( url === '/message' && method === 'POST'){
        fstat.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from nodejs server</h1></body>');
    res.write('</html>');
    res.end();
})
server.listen(3000);