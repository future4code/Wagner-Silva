/* RESPOSTAS DAS QUESTÕES DE INTERPRETAÇÃO DE CÓDIGO

   1- Trata-se de um programa que diz se um número fornecido pelo usuário é par ou ímpar.
      Caso o número seja par, será impresso na tela "Passou no teste."; caso contrário
      será impresso "Não passou no teste.".

   2- a. Para mostrar o preço de uma determinada fruta existente no estoque;
      b. "O preço da fruta Maçã é R$ 2.25";
      c. 24.55;
      d. "O preço da fruta Pêra é R$ 5";

   3- Independente dos números que o usuário digite, vai dar um erro ao tentar imprimir na
      na tela a mensagem porque esta variável foi declarada no escopo do if.
*/


/* RESPOSTAS DAS QUESTÕES DE ESCRITA DE CÓDIGO */


/* EXERCÍCIO 4A */
n1 = prompt("Digite um número:");
n2 = prompt("Digite outro número:");

if(Number(n1) > Number(n2)) {
   console.log(n1);
   console.log(n2);
} else {             // ESTE ELSE SERÁ
   console.log(n2);  // IMPRESSO QUANDO OS
   console.log(n1);  // NÚMEROS FOREM IGUAIS
}

/* EXERCÍCIO 4B */
n1 = prompt("Digite um número:");
n2 = prompt("Digite outro número:");
n3 = prompt("Digite mais um número:");


if(Number(n1) > Number(n2) && Number(n1) > Number(n3)) {
   console.log(n1);
   if(Number(n2) > Number(n3)) {
      console.log(n2);
      console.log(n3);
   } else {
      console.log(n3);
      console.log(n2);
   }
} else if(Number(n2) > Number(n1) && Number(n2) > Number(n3)) {
   console.log(n2);
   if(Number(n1) > Number(n3)) {
      console.log(n1);
      console.log(n3);
   } else {
      console.log(n1);
      console.log(n2);
   }
} else { // ESTE ELSE SERÁ IMPRESSO QUANDO OS NÚMEROS FOREM IGUAIS
   console.log(n3);
   if(Number(n1) > Number(n2)) {
      console.log(n1);
      console.log(n2);
   } else {
      console.log(n2);
      console.log(n1);
   }
}


/* EXERCÍCIO 4C */

n1 = prompt("Digite um número:");
n2 = prompt("Digite outro número:");
n3 = prompt("Digite mais um número:");

if((Number(n1) === Number(n2)) && (Number(n2) === Number(n3))) {
   alert("Números iguais! Pelo menos um deve ser diferente!");
   
} else if(Number(n1) > Number(n2) && Number(n1) > Number(n3)) {
   console.log(n1);
   if(Number(n2) > Number(n3)) {
      console.log(n2);
      console.log(n3);
   } else {
      console.log(n3);
      console.log(n2);
   }
} else if(Number(n2) > Number(n1) && Number(n2) > Number(n3)) {
   console.log(n2);
   if(Number(n1) > Number(n3)) {
      console.log(n1);
      console.log(n3);
   } else {
      console.log(n1);
      console.log(n2);
   }
} else {
   console.log(n3);
   if(Number(n1) > Number(n2)) {
      console.log(n1);
      console.log(n2);
   } else {
      console.log(n2);
      console.log(n1);
   }
}

/* EXERCÍCIO 5 
   Link da árvore condicional: https://drive.google.com/file/d/1DlX9iYdSfgtol1EK2L1ToLZ8wXrm6bNM/view?usp=sharing
*/

let animal;

const ossos = prompt("Este animal possui ossos ? (s para sim e n para não)");
if(ossos === 's') {
   const pelos = prompt("Possui pelos ? (s para sim e n para não)");
   if(pelos === 's') {
      const racional = prompt("É um animal racional ? (s para sim e n para não)");
      if(racional === 's') {
         animal = "Ser humano";
      } else {
         animal = "Mamífero não humano";
      }
   } else {
      const penas = prompt("Possui penas ? (s para sim e n para não)");
      if(penas === 's') {
         animal = "ave";
      } else {
         const animalTerreste = prompt("É um animal terrestre ? (s para sim e n para não)");
         if(animalTerreste === 's') {
            const viveUmPoucoNaAgua = prompt("Passa uma parte da vida na água ? (s para sim e n para não)");
            if(viveUmPoucoNaAgua === 's') {
               animal = "Anfíbio";
            } else {
               animal = "Réptil"
            }
         } else {
            animal = "Peixe";
         }
      }
   }
} else {
   animal = "Invertebrado";
}

alert("O animal é " + animal);

/* RESOLUÇÃO DO DESAFIO */

const nomeCompleto = prompt("Nome completo:");
const tipoDeJogo = prompt("Tipo de jogo (DO para doméstico, IN para internacional):");
const etapaDoJogo = prompt("Etapa do jogo (SF: semi-final, DT: decisão terceiro lugar, FI: final");
const categoria = prompt("Categoria (1, 2, 3 ou 4):");
const ingressos = prompt("Quantidade de ingressos:");

console.log("---Dados da compra---");
console.log("Nome do cliente: " + nomeCompleto);

if(tipoDeJogo === "DO") {
   console.log("Tipo do jogo: Nacional");
} else if(tipoDeJogo === "IN") {
   console.log("Tipo do jogo: Internacional");
}

if(etapaDoJogo === "SF") {
   console.log("Etapa do jogo: Semi-final");
} else if(etapaDoJogo === "DT") {
   console.log("Etapa do jogo: Decisão do Terceiro Lugar");
} else if (etapaDoJogo === "FI") {
   console.log("Etapa do jogo: Final");
}

console.log("Categoria: " + categoria);

console.log("Quantidade de ingressos: " + ingressos + " ingressos");

console.log("---Valores---");

let valorIngresso;

if(etapaDoJogo === "SF") {
   if(categoria === '1') {
      valorIngresso = 1320;
   } else if(categoria === '2') {
      valorIngresso === 880;
   } else if(categoria === '3') {
      valorIngresso = 550;
   } else if(categoria === '4') {
      valorIngresso = 220;
   }
} else if(etapaDoJogo === "DT") {
   if(categoria === '1') {
      valorIngresso = 660;
   } else if(categoria === '2') {
      valorIngresso === 440;
   } else if(categoria === '3') {
      valorIngresso = 330;
   } else if(categoria === '4') {
      valorIngresso = 170;
   }
} else if(etapaDoJogo === "FI") {
   if(categoria === '1') {
      valorIngresso = 1980;
   } else if(categoria === '2') {
      valorIngresso === 1320;
   } else if(categoria === '3') {
      valorIngresso = 880;
   } else if(categoria === '4') {
      valorIngresso = 330;
   }
}

if(tipoDeJogo === "DO") {
   console.log("Valor do ingresso: R$" + valorIngresso);
   console.log("Valor total: R$" + (valorIngresso * Number(ingressos)))
} else if(tipoDeJogo === "IN") {
   console.log("Valor do ingresso: U$" + (valorIngresso * 4.10));
   console.log("Valor total: U$" + (valorIngresso * Number(ingressos) * 4.10));
}