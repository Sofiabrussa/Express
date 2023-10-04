
//Expressjs crea el servidor (representado con la variable app) a través de la función createApplication, dicha
//función es expuesta por express.
//Cuando se necesita crear el servidor, se hace de la siguiente manera:

import express from 'express';
const app = express();

//Para indicarle a express que tiene que tiene que transformar el body de esta request a un JSON lo hacemos a
//través del siguiente middleware:

app.use(express.json()); // para poder leer json en el body



