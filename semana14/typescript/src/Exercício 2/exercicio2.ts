const numbersInfo = (n1: number, n2: number): void => {
    console.log(`Soma: ${n1 + n2}`)
    console.log(`Subtração: ${n1 - n2}`);
    console.log(`Multiplicação: ${n1 * n2}`);
    n1 > n2 ? console.log(`Maior: ${n1}`) : console.log(`Maior: ${n2}`);
}

numbersInfo(1, 2);
numbersInfo(5, 2);
numbersInfo(4, 4);