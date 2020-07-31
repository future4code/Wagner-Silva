import express from 'express';
import routes from './routes';
import { AddressInfo } from 'net';

const app = express();

app.use(express.json());
app.use(routes);

const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando em http://localhost:${address.port}...`);
    } else {
        console.error(`Falha na inicialização do servidor.`)
    }
})