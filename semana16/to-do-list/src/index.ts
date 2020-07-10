import express from 'express';
import routes from './routes';

const app: any = express();

app.use(express.json());
app.use(routes);

app.listen(3003, () => console.log("Servidor rodando..."));