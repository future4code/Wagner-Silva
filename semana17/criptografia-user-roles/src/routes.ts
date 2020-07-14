import express from 'express';
import { UserController } from './controllers/UserController';

const routes: express.Router = express.Router();

routes.post("/login", UserController.login);
routes.post("/signup", UserController.store);
routes.get("/user/profile", UserController.show);
routes.delete("/user/:id", UserController.destroy)

export default routes;