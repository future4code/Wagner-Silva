// a. Acessamos através de process.argv[index_parametro]
// b.

const questaoB = (): void => {
    const nome: string = process.argv[2];
    const idade: number = Number(process.argv[3]);

    console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
}

const questaoC = (): void => {
    const nome: string = process.argv[2];
    const idade: number = Number(process.argv[3]);

    console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`);
}

questaoB();
questaoC();