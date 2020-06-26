import axios from 'axios';
import { utils } from './utils';

/* 
 *  a. O endpoint que deve ser utilizado é:
 *      https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/all
 *  b. Da seguinte maneira:
 *      async function nome_funcao(): any[] {}
 *  c. Implementação abaixo.
 */

async function getAllSubscribers(): Promise<any[]> {
    const subscribersRequest = await axios.get(`${utils.BASE_URL}/subscribers/all`);

    return subscribersRequest.data;
}

async function main(): Promise<void> {
    console.log(await getAllSubscribers());
}

main();