import express from 'express';
import UserController from './controllers/UserController';

const routes: any = express.Router();

routes.post("/users", UserController.store); //CRIAR USUÁRIO
routes.get("/users", UserController.index); //PEGAR TODOS OS USUÁRIOS
routes.get("/users/:user_id", UserController.show); //PÉGAR USUÁRIO PELO ID
routes.put("/users/:user_id", UserController.update); //EDITAR USUÁRIO
routes.delete("/users/:user_id", UserController.destroy); //DELETAR UM USUÁRIO
routes.get("/users/:user_id/tasks"); //PEGAR TAREFAS CRIADAS POR UM USUÁRIO
routes.get("/users/search"); //PESQUISAR USUÁRIO

routes.post("/tasks"); //CRIAR TAREFA
routes.get("/tasks/:task_id"); //PEGAR TAREFA PELO ID
routes.put("/tasks/:task_id/apply_user"); //ATRIBUIR UM USUÁRIO A UMA TAREFA
routes.put("/tasks/:task_id/status"); //ATUALIZAR O STATUS DA TAREFA
routes.delete("/tasks/:task_id"); //DELETAR UMA TAREFA
routes.get("/tasks/:task_id/users"); //PEGAR USUÁRIOS RESPONSÁVEIS POR UMA TAREFA
routes.get("/tasks/:status"); //PEGAR TODAS AS TAREFAS POR STATUS
routes.get("/tasks/overdue"); //PEGAR TODAS AS TAREFAS ATRASADAS

export default routes;

/* FALTANDO:
        - Retirar um usuário responsável de uma tarefa (15)
        - Procurar tarefa por termos
        - Atualizar o status de várias tarefas
*/