import express from 'express';
import { UserController } from './controllers/UserController';

const routes: express.Router = express.Router();

routes.post("/login", UserController.login);
routes.post("/signup", UserController.store);
routes.get("/user/profile");

export default routes;