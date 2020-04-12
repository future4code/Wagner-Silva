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
// function segundoMaior(numeros) {
//     let maior = Math.max(...numeros);
//     let segundoMaior = Math.min(...numeros);

//     for(let numero of numeros) {
//         if(numero > segundoMaior && numero < maior) {
//             segundoMaior = numero;
//         }
//     }

//     return segundoMaior;
// }

// function segundoMenor(numeros) {
//     let menor = Math.min(...numeros);
//     let segundoMenor = Math.max(...numeros);

//     for(let numero of numeros) {
//         if(numero < segundoMenor && numero > menor) {
//             segundoMenor = numero;
//         }
//     }

//     return segundoMenor;
// }

// function exercicio1(numeros) {
//     console.log(segundoMaior(numeros));
//     console.log(segundoMenor(numeros));
// }

// exercicio1([4,1,8,9,3,2,10]);

/* EXERCÍCIO 2 */
// const exercicio2 = () => {
//     alert("Hello Labenu");
// };

// exercicio2();

/* EXERCÍCIOS DE OBJETOS */
/* EXERCÍCIO 1
   1- Devemos utilizar arrays quando queremos guardar dados de um mesmo tipo de forma ordenada
   (não necessariamente em ordem); objetos são estruturas de dados mais robustas, onde podem ser
   guardados tipos diferentes, além de poder guardar funções.
*/

/* EXERCÍCIO 2 */
// function criaRetangulo(lado1, lado2) {
//     return {
//         largura: lado1,
//         altura: lado2,
//         perimetro: 2 * (lado1 + lado2),
//         area: lado1 * lado2
//     }
// }

/* EXERCICIO 3 */
// const filme = {
//     titulo: "O Irlandês",
//     ano: 2019,
//     diretor: "Martin Scorsese",
//     atores: ["Robert De Niro", "Al Pacino", "Joe Pesci"]
// }

// function filmeFavorito(filme) {
//     console.log(`Venha assistir ao filme ${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.toString()}.`);
// }

// filmeFavorito(filme);

/* EXERCÍCIO 4 */
// const pessoa = {
//     nome: "Wagner",
//     idade: 21,
//     email: "wagner@email.com",
//     endereco: "Cuitegi-PB",
// }

// function anonimizarPessoa(pessoa) {
//     return {
//         ...pessoa,
//         nome: "ANÔNIMO"
//     }
// }

// novoObj = anonimizarPessoa(pessoa);
// console.log(pessoa);
// console.log(novoObj);


/* AULA 16 - CALLBACK E FUNÇÕES DE ARRAY */
/* EXERCÍCIO 1
   Antes das funções de array podíamos iterar através de while, for ou for...of.
   Abaixo há um exemplo.
*/
// function iteracaoEmArrays() {
//     const array = [1, 2, 3];

//     /* Iteração com while */
//     let n = 0;
//     while(n < array.length) {
//         console.log(array[n]);
//         n++;
//     }

//     /* Iteração com for */
//     for(let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }

//     /* Iteração com for..of */
//     for(let elemento of array) {
//         console.log(elemento);
//     }
// }

/* EXERCÍCIO 2 */
// const pessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ];

// /* a. */
// const adultos = pessoas.filter(pessoa => {
//     return pessoa.idade >= 20;
// });

// /* b. */
// const criancasAdolescentes = pessoas.filter(pessoa => {
//     return pessoa.idade < 20;
// });

/* EXERCÍCIO 3 */
const array = [1, 2, 3, 4, 5, 6];

/* a. */
const arrayMultiplicadoPor2 = array.map(elemento => {
    return elemento * 2;
});

/* b. */
const arrayMultiplicadoPor3EmString = array.map(elemento => {
    return `${elemento * 3}`;
});

/* c. */
const arrayParesImpares = array.map(elemento => {
    if(elemento % 2 === 0) {
        return `${elemento} é par`;
    } else {
        return `${elemento} é ímpar`;
    }
});