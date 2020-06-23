const operacao: string = process.argv[2];
const numero1: number = Number(process.argv[3]);
const numero2: number = Number(process.argv[4]);

switch(operacao) {
    case "add":
        console.log(`Resposta: ${numero1 + numero2}`);
        break;
    case "sub":
        console.log(`Resposta: ${numero1 - numero2}`);
        break;
    case "mult":
        console.log(`Resposta: ${numero1 * numero2}`);
        break;
    case "div":
        console.log(`Resposta: ${numero1 / numero2}`);
        break;
    default:
        console.log("Opção inválida");
}