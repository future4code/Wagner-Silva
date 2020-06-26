import * as fs from 'fs';

const arquivo: string = process.argv[2];
const novosDados: string = process.argv[3];

try {
    fs.appendFileSync(arquivo, novosDados, "utf-8");
    console.log("Arquivo editado com sucesso!");
} catch(erro) {
    console.error(erro);
}