import axios from 'axios';
import { utils } from './utils';

/* 
 *  a. Executa um conjunto de promises e retorna um array com o retorno de cada promise.
 *  b. A vantagem principal é que as notificações são enviadas ao mesmo tempo e podemos
 *     fazer algo depois que elas terminarem tendo a certeza de que elas foram executadas,
 *     tendo sido aceitas ou rejeitadas.
 *  c. Implementação abaixo.
 */

type User = {
    id: string;
    name: string;
    email: string;
}

const sendNotification = async (users: User[], message: string): Promise<void> => {
    const promises: [] = [];

    for(let user of users) {
        console.log(`Enviando notificação para: ${user.name}`)
        promises.push(await axios.post(`${utils.BASE_URL}/notifications/send`, {
            subscriberId: user.id,
            message
        }));
    }

    await Promise.all(promises);

    console.log("Notificações enviadas");
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
    await sendNotification(await getAllSubscribers(), "Nova notificação");
}

main();