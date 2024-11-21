const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200; //Estado OK
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>¡Hola, Mundo desde Node.js!</h1>');
});

server.listen(3000, () => {
    console.log(`Servidor ejecutándose en http://localhost:3000`);
});