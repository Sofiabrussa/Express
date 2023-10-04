
const http = require('http');  //La constante http ahora puede gestionar peticiones HTTP

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 res.end('Hello World DDS!!!');
});

server.listen(port, hostname, () => {   //El servicio http comienza a escuchar en el puerto y hostname configurado con server.listen
 console.log(`Server running at http://${hostname}:${port}/`);

});

