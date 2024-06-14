const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('path/to/file', (error, data) => {
    if (error) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('Error: File Not Found');
      res.end();
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    }
  });
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
