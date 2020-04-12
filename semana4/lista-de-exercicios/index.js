/* AULA 14 - DOM 

   
   EXERCÍCIOS DE LEITURA DE CÓDIGO

   1- A função recebe o valor em dólares como argumento, pergunta ao usuário o valor da cotação e
   multiplica o valor em dólares pela cotação, retornando como string, precedido de "R$". Por fim,
   imprime na tela o valor em reais de 100 dólares.

   2- A função recebe um tipo de investimento e o valor a ser investido. Através do switch/case
   define-se o tipo de investimento, informando erro caso o tipo esteja incorreto. Após a escolha,
   define-se o valor de investimento de acordo com a opção escolhida e retorna este valor. Por fim,
   imprime na tela um valor de 150 investido em ações e 200 em tesouro direto.

   3- O código separa um array em outros 2, onde um estará os números pares, e no outro os números
   ímpares. Por fim, imprime na tela a quantidade de números do array que possui todos os números,
   e em seguida a quantidade de números pares e ímpares através do tamanho de seus respectivos
   arrays.
   
   4- Serão impressos o maior e o menor número de um array de números. Como numero1 inicia-se como
   infinito, ele guardará o menor no número ao final da iteração; numero2 inicia-se como 0, portanto
   guardará o maior número.
*/


/* EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO 

   EXERCÍCIO 1
   a. false;
   b. false;
   c. true;
   d. true;
   e. true;
*/

/* EXERCÍCIO 2
   O código está completamente errado. Primeiro que no while a variável quantidadeDeNumerosPares está
   undefined no momento da comparação; e segundo que não há nenhuma comparação se o número é par ou não.
   Abaixo está a implementação correta da função.
*/
// function quantidadeDeNumerosPares(quantidade) {
//     for(let i = 0; i < quantidade * 2; i += 2) {
//         console.log(i);
//     }
// }

/* EXERCÍCIO 3 */
// function classificacaoDeTriangulo(a, b, c) {
//     if(a === b && b === c) {
//         return "Equilátero";
//     } else if(a === b || b === c || a === c) {
//         return "Isósceles";
//     } else {
//         return "Escaleno";
//     }
// }

/* EXERCÍCIO 4 */
// function maior(a, b) {
//     if(a > b) return a;
//     else return b;
// }

// function diviseis(a, b) {
//     return a % b === 0;
// }

// function diferenca(a, b) {
//     return Math.abs(a -b);
// }

// function exercicio4(a, b) {
//     console.log(`ENTRADA:\n${a} e ${b}\n`);
//     console.log(`SAÍDA:\nO maior é ${maior(a, b)}`);

//     if(diviseis(a, b)) {
//         console.log(`${a} é divisível por ${b}`);
//     } else {
//         console.log(`${a} não é divisível por ${b}`);
//     }

//     if(diviseis(b, a)) {
//         console.log(`${b} é divisível por ${a}`);
//     } else {
//         console.log(`${b} não é divisível por ${a}`);
//     }

//     console.log(`A diferença entre eles é ${diferenca(a, b)}`);
// }


/* AULA 15 - Objetos, Strings e Arrays */
/* EXERCÍCIOS DE FUNÇÕES */
/* EXERCÍCIO 1 */
function segundoMaior(numeros) {
    let maior = Math.max(...numeros);
    let segundoMaior = Math.min(...numeros);

    for(let numero of numeros) {
        if(numero > segundoMaior && numero < maior) {
            segundoMaior = numero;
        }
    }

    return segundoMaior;
}

function segundoMenor(numeros) {
    let menor = Math.min(...numeros);
    let segundoMenor = Math.max(...numeros);

    for(let numero of numeros) {
        if(numero < segundoMenor && numero > menor) {
            segundoMenor = numero;
        }
    }

    return segundoMenor;
}

function exercicio1(numeros) {
    console.log(segundoMaior(numeros));
    console.log(segundoMenor(numeros));
}