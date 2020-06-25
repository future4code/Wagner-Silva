import axios from 'axios';
import { utils } from './utils';

/* 
 *  a. A diferença, na implementação, é sutil: o tipo de retorno é uma Promise de algum
 *     tipo estabelecido.
 *  b. Implementação abaixo.
 */

const getAllSubscribers = async (): Promise<any[]> => {
    const subscribersRequest = await axios.get(`${utils.BASE_URL}/subscribers/all`);

    return subscribersRequest.data;
}

const main = async (): Promise<void> => {
    console.log(await getAllSubscribers());
}

main();