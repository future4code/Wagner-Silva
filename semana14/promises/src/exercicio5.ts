import axios from 'axios';
import { utils } from './utils';

/* 
 *  a. Funções de array normalmente não se dão muito bem com promises, portanto sempre é bom utilizar o for(for ou for...of...)
 *  b. Implementação abaixo.
 */

type User = {
    id: string;
    name: string;
    email: string;
}

const sendNotification = async (users: User[], message: string): Promise<void> => {
    for(let user of users) {
        console.log(`Enviando notificação para: ${user.name}`)
        await axios.post(`${utils.BASE_URL}/notifications/send`, {
            subscriberId: user.id,
            message
        });
        console.log("Notificação enviada");
    }
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