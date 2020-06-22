var arrayInfo = function (numbers) {
    var oddNumbers = numbers.filter(function (number) {
        return number % 2 !== 0;
    });
    var sum = numbers.reduce(function (sumNumbers, number) { return sumNumbers + number; });
    return {
        arrayLength: numbers.length,
        oddNumbersLength: oddNumbers.length,
        arraySum: sum
    };
};
console.log(arrayInfo([12, 3, 7, 41]));
