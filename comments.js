//create a web server that listens on port 3000 and serves the comments.html file
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //console.log(req.url);
    if (req.url === '/favicon.ico') {
        res.end();
        return;
    }
    if (req.url === '/comments.html') {
        fs.readFile('./comments.html', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('404 Not Found');
            }
            else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
    else {
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
