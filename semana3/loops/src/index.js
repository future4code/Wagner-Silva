/*
    RESPOSTAS DAS QUESTÕES DE INTERPRETAÇÃO DE CÓDIGO
    1- Está fazendo um loop que que no final irá imprimir na tela a soma dos números entre 0 e 14.
       O resultado será 105;

    2- a. Adiciona um elemento ao final do array;
       b. O valor impresso será todos os números contidos no array divisíveis por 5, 
          que neste cenário seriam [10, 15, 25, 30];
       c. Todos os números divisíveis por 3 ([12, 15, 18, 21, 27, 30]) e todos números
          divisíveis por 4 ([12])

    RESPOSTA DO DESAFIO DE INTERPRETAÇÃO DE CÓDIGO
    1- Será impresso uma "escadinha" com quatro linhas e zeros de acordo com o número da linha.
*/



/* RESPOSTAS DAS QUESTÕES DE ESCRITA DE CÓDIGO */


/* EXERCÍCIO 3 */

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

/* a. */
let maior = array[0];
let menor = array[0];
for(let i = 1; i < array.length; i++) {
   if(array[i] > maior) {
      maior = array[i];
   }
   if(array[i] < menor) {
      menor = array[i];
   }
}

console.log("O maior número é " + maior + " e o menor número é " + menor);


/* b. */
const novoArray = [];

for(let n of array) {
   novoArray.push(n / 10);
}

console.log(novoArray);


/* c. */
const novoArray = [];

for(let n of array) {
   if(n % 2 === 0) {
      novoArray.push(n);
   }
}

console.log(novoArray);


/* d. */
const novoArray = [];
for(let i = 0; i < array.length; i++) {
   novoArray.push("O elemento do index " + i + " é: " + array[i]);
}

console.log(novoArray);



/* RESPOSTAS DOS DESAFIOS */


/* DESAFIO 2 */
const numeroJogador1 = Number(prompt("Jogador 1, escolha seu número:"));

alert("Vamos jogar!");

let numeroJogador2;
let tentativas = 0;
let quente = numeroJogador1 + 5;
let frio = numeroJogador1 - 5;

while(true) {
   numeroJogador2 = Number(prompt("Jogador 2, chute um número:"));
   tentativas += 1;
   if(numeroJogador2 === numeroJogador1) {
      break;
   } else if(numeroJogador2 === numeroJogador1 + 1 || numeroJogador2 === numeroJogador1 - 1) {
      alert("O número chutado foi: " + numeroJogador2 + " \nTÁ MUITO QUENTE !!!");
   } else if((numeroJogador2 < numeroJogador1 + 5 && numeroJogador2 > numeroJogador1 + 1)
               || (numeroJogador2 > numeroJogador1 - 5 && numeroJogador2 < numeroJogador1 - 1)) {
      alert("O número chutado foi: " + numeroJogador2 + " \nTá quente!");
   } else if((numeroJogador2 > numeroJogador1 + 5  && numeroJogador2 < numeroJogador1 + 10)
               || (numeroJogador2 < numeroJogador1 - 5 && numeroJogador2 > numeroJogador1 - 10)) {
      alert("O número chutado foi: " + numeroJogador2 + " \nTá frio!");
   } else {
      alert("O número chutado foi: " + numeroJogador2 + "\nTÁ MUITO FRIO!");
   }
}

alert("Acertou!!\nO número de tentativas foi: " + tentativas);


/* DESAFIO 3*/
const numeroComputador = Math.random().toFixed(2) * 100;

alert("Vamos jogar!");

let jogador;
let tentativas = 0;
let quente = numeroComputador + 5;
let frio = numeroComputador - 5;

while(true) {
   jogador = Number(prompt("Jogador, chute um número:"));
   tentativas += 1;

   if(jogador === numeroComputador) {
      break;
   } else if(jogador === numeroComputador + 1 || jogador === numeroComputador - 1) {
      alert("O número chutado foi: " + jogador + " \nTÁ MUITO QUENTE !!!");
   } else if((jogador < numeroComputador + 5 && jogador > numeroComputador + 1)
               || (jogador > numeroComputador - 5 && jogador < numeroComputador - 1)) {
      alert("O número chutado foi: " + jogador + " \nTá quente!");
   } else if((jogador > numeroComputador + 5  && jogador < numeroComputador + 10)
               || (jogador < numeroComputador - 5 && jogador > numeroComputador - 10)) {
      alert("O número chutado foi: " + jogador + " \nTá frio!");
   } else {
      alert("O número chutado foi: " + jogador + "\nTÁ MUITO FRIO!");
   }
}

alert("Acertou!!\nO número de tentativas foi: " + tentativas);

/* Esta alteração foi fácil. O que poderia ser melhor era dar um intervalo próprio para a escolha do
   número pelo computador (como de 1 a 30 por exemplo). Pensando um pouco daria para criar uns cálculos
   para isso, mas de uma maneira mais simples seria melhor.
 */