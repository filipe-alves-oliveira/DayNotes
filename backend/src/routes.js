//essa pasta routes facilita quando usamos o get, post, delete, náo precisamos mais usar o app.get.. usamos routes.get

const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController')

routes.post('/annotations', AnnotationController.create); //Rota Annotations
routes.get('/annotations', AnnotationController.read);

module.exports = routes;
