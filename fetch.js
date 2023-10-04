const fetch = require('node-fetch'); 
const axios = require('axios');  //útil para interactuar con APIs web, recuperar y enviar datos desde y hacia servidores


fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(data => console.log(data)) 
.catch(error => console.error(error));


axios.get('https://jsonplaceholder.typicode.com/posts/1')
.then(response => {
 console.log(response.data);
 })
.catch(error => {
 console.error(error);
 });

