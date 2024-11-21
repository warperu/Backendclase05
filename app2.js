const http = requiere('http');

const server = http.createServer((req, res) => {
    if(req.url === '/lento'){
        setTimeout(() => {
            res.end('Esta respuesta tardo 5 segundos');
        }, 5000)
    } else{
        res.end('Respuesta rapida')
    }    
});

server.listen(3001, () => {
    console.log('Sevidor ejecutandose en http:://localhost:3001');
});