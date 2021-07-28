import { Router } from 'express';
import userController from './controllers/user.controller'

const routes = new Router();

routes.get("/", (req, res) => {
    const json = JSON.parse('{"test":"Hello World"}');
    res.send(json);
});

routes.post('/user', userController.createUser);
routes.get('/users', userController.findAllUsers);
routes.get('/user/:id', userController.findUserById);
routes.put('/user/:id', userController.updateUser);
routes.delete('/user/:id', userController.deleteUser);

export default routes;
