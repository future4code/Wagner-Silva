import axios from 'axios';
import { utils } from './utils';

type User = {
    id: string;
    name: string;
    email: string;
}

// a. Criar novo assinante
const createSubscriber = async (): Promise<void> => {
    try {
        await axios.put(`${utils.BASE_URL}/subscribers`, {
            name: "Wagner",
            email: "wagner@email.com"
        });
    } catch(error) {
        console.log(error);
    }
}

// b. Criar nova notícia e enviar uma notificação para todos os assinantes
const createNews = async (): Promise<void> => {
    await axios.put(`${utils.BASE_URL}/news`, {
        title: "Julian saiu do Frontend",
        content: "Para a alegria de muitos, e a tristeza de alguns, a turma Julian está, agora, no backend!",
        date: Date.now()

    });

    await sendNotification(await getAllSubscribers(), "Nova notícia na área");
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

const getAllNotifications = async (): Promise<any> => {
    const users = await getAllSubscribers();

    const promises: [] = []
    for(let user of users) {
        promises.push(
            await axios.get(`${utils.BASE_URL}/subscribers/${user.id}/notifications/all`)
        )
    }

    const notifications: Promise<any>[] = await Promise.all(promises);
    notifications.map( notification => console.log(notification));
}

const main = async (): Promise<void> => {
    await getAllNotifications();
}

main();