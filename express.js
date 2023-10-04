// Express es un framework de desarrollo web para Node.js que proporciona una arquitectura de aplicaciones
const express = require('express')

const app = express()   //app: es el objeto de la aplicación
const port = 3001

//app.get('/', (req, res) => {   //app.get: Enruta las solicitudes HTTP GET a la ruta especificada
   // res.send('Hola Mundo!')  //res.send: Envía la respuesta HTTP
//})

//Objeto Request: tiene la solicitud (query string), los parámetros, el cuerpo (body), los encabezados (Headers) HTTP, etc.
//Objeto Response: e envía una aplicación Express cuando recibe una solicitud HTTP.


//Enrutamiento
//El enrutamiento se refiere a determinar cómo responde una aplicación a una solicitud de un cliente a un punto final (EndPoint) en particular, que es un URI (o ruta) y
//un método o verbo de solicitud HTTP específico (GET, POST, etc.).

app.get('/', (req, res) => {
    res.redirect('/Inicio'); // redireccion, para manejar más variedades de solicitudes HTTP.
   });

app.get('/Inicio', (req, res) => {
    res.send('Pagina de Inicio!');
   });
app.get('/AcercaDe', (req, res) => {
    res.send('Pagina de Acerca!');
   });
app.use('', (req, res) => {
    res.send('Pagina no econtrada!');
   });

app.listen(port, () => {
    console.log(`Aplicacion Hola Mundo escuchando en el puerto ${port}`);
   });

