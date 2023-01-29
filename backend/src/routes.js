//essa pasta routes facilita quando usamos o get, post, delete, náo precisamos mais usar o app.get.. usamos routes.get

const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');
const PriorityController = require('./controllers/PriorityController');

routes.post('/annotations', AnnotationController.create); //Rota Annotations
routes.get('/annotations', AnnotationController.read);
routes.delete('/annotations/:id', AnnotationController.delete);
routes.get('/priorities', PriorityController.read);  //Rota de prioridade
routes.post('/priorities/:id', PriorityController.update);

module.exports = routes;
