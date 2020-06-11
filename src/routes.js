const { Router } = require('express');
const UserController = require('./app/controllers/UsuarioController');

const routes = Router();

routes.get('/usuarios', UserController.index);

routes.get('/usuarios/:id', UserController.show);

routes.post('/usuarios', UserController.store);

routes.put('/usuarios/:id', UserController.update);

routes.delete('/usuarios/:id', UserController.destroy);

module.exports = routes;