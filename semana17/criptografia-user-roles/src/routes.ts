import express from 'express';
import { UserController } from './controllers/UserController';

const routes: express.Router = express.Router();

routes.post("/login", UserController.login);
routes.get("/user/profile", UserController.profile);
routes.get("/user/:id", UserController.show);
routes.post("/signup", UserController.store);
routes.delete("/user/:id", UserController.destroy)

export default routes;