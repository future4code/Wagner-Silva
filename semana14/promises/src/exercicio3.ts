import axios from 'axios';
import { utils } from './utils';

/* 
 *  a. Não houve nenhum erro de tipagem, inclusive a função continua funcionando
 *     corretamente, mesmo sem o mapeamento.
 *  b. Fazemos isso pois any pode retornar qualquer coisa, o mapeamento é feito
 *     é feito para termos a certeza que o retorno será o mesmo da função que definimos.
 *  c. Implementação abaixo.
 */

type User = {
    id: string;
    name: string;
    email: string;
}

const getAllSubscribers = async (): Promise<User[]> => {
    const subscribersRequest = await axios.get(`${utils.BASE_URL}/subscribers/all`);

    return subscribersRequest.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    });
}

const main = async (): Promise<void> => {
    console.log(await getAllSubscribers());
}

main();