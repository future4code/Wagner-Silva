/*
    RESPOSTAS DAS QUESTÕES DE INTERPRETAÇÃO DE CÓDIGO
    1- a. false
       b. false
       c. true
       d. false
       e. boolean

    2- a- Array é uma estrutura de dados que armazena em sequência na memória dados de mesmo tipo;
       b- O index inicial de um Array é 0;
       c- Através de array.length;
       d-   I. undefined;
           II. null;
          III. 11;
           IV. 3 e 4;
            V. 19 e 9;
           VI. 3;
          VII. 1;
*/


/* RESPOSTAS DAS QUESTÕES DE ESCRITA DE CÓDIGO */


/* EXERCÍCIO 1 */
questao1A = (77 - 32) * 5 / 9 + 273.15;
console.log("77ºF = " + questao1A + "K");

questao1B = 80 * 9 / 5 + 32;
console.log("80ºC = " + questao1B + "ºF");

questao1C = 30 * 9 / 5 + 32;
console.log("30ºC = " + questao1C + "ºF");
questao1C = (questao1C - 32) * 5 / 9 + 273.15;
console.log("30ºC = " + questao1C + "K");

graus = window.prompt("Digite a temperatura em graus Celsius: ");
questao1C = graus * 9 / 5 + 32;
console.log(graus + " = " + questao1C + "ºF");
questao1C = (questao1C - 32) * 5 / 9 + 273.15;
console.log(graus + " = " + questao1C + "K");


/* EXERCÍCIO 2*/

resposta = window.prompt("1- Qual o seu nome ?");
console.log("Resposta: " + resposta);

resposta = window.prompt("2- O que você mais gosta de fazer ?");
console.log("Resposta: " + resposta);

resposta = window.prompt("3- Qual o seu livro preferido ?");
console.log("Resposta: " + resposta);

resposta = window.prompt("4- Qual a sua banda de rock favorita ?");
console.log("Resposta: " + resposta);

resposta = window.prompt("5- Você gosta de futebol ? Se sim, qual time você torce ?");
console.log("Resposta: " + resposta);


/* EXERCÍCIO 3 */

questao3A = 280 * 0.05;
console.log("Valor a ser pago pelo consumo de 280 quilowatt-hora: " + questao3A);

questao3B = questao3A - (questao3A * 0.15);
console.log("Com um desconto de 15% o valor a ser pago é: " + questao3B);


/* RESPOSTAS DOS DESAFIOS */

lbKg = 20 * 0.45;
console.log("20lb equivalem a " + lbKg + " kg");

ozKg = 10.5 * 0.028;
console.log("10.5oz equivalem a " + ozKg + " kg");

miMetros = 100 * 1609.34;
console.log("100mi equivalem a " + miMetros + "m");

ftMetros = 50 * 0.3048;
console.log("50ft equivalem a " + ftMetros + "m");

galLitros = 103.56 * 3.785;
console.log("103.56gal equivalem a " + galLitros + "l");

xicLitros = 450 * 0.284;
console.log("450xic equivalem a " + xicLitros + "l");

input = window.prompt("Digite o valor em milhas:");
inputMiMetros = input * 1609.34;
console.log(input + "mi equivalem a " + inputMiMetros + "m");