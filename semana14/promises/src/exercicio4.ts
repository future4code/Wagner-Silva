import axios from 'axios';
import { utils } from './utils';

/* 
 *  a. É uma função do tipo Promise<void>, pois não será preciso retornar nada.
 *  b. Implementação abaixo.
 */

const createNews = async (): Promise<void> => {
    await axios.put(`${utils.BASE_URL}/news`, {
        title: "Julian saiu do Frontend",
        content: "Para a alegria de muitos, e a tristeza de alguns, a turma Julian está, agora, no backend!",
        date: Date.now()

    });
}

const main = async (): Promise<void> => {
    createNews();
}

main();