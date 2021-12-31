const http = require('http'); //looking for global module 
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //process.exit() // exits the server
    const url = req.url;
    const method = req.method;
    console.log("url: ", url);
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log("Chunk: ", chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString(); 
            const message = parseBody.split("=")[1];
            fs.writeFileSync('message.txt', message);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
    <head>
        <title> My First App</title>
    </head>
    <body>
    <h1>Hello From my Node.js </h1>
    </body> 
    </html`)
});

server.listen(3000)
