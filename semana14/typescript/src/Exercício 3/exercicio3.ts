const arrayInfo = (numbers: number[]): { arrayLength: number, oddNumbersLength: number, arraySum: number } => {
    const oddNumbers = numbers.filter( number => {
        return number % 2 !== 0;
    });

    const sum: number = numbers.reduce((sumNumbers, number) => sumNumbers + number);

    return {
        arrayLength: numbers.length,
        oddNumbersLength: oddNumbers.length,
        arraySum: sum
    }
}

console.log(arrayInfo([12,3,7,41]));