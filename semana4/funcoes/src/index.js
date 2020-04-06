/* RESPOSTAS DAS QUESTÕES DE INTERPRETAÇÃO DE CÓDIGO

   1- a. []
      b. [0,1,0,1,2,3]
      c. [0,1,0,1,2,3,0,1,2,3,4,5]

   2- a. Saída de funcao(arrayDeNomes, "Darvas") => 0
         Saída de funcao(arrayDeNomes, "João") => 2
         Saída de funcao(arrayDeNomes, "Paula") => undefined
      b. Sim, pois a função retorna a posição de um elemento caso ele exista no array,
         e neste caso a troca de strings por números não traria efeitos colaterais
         quando a função fosse executada.
   
   3- Primeiramente essa função faz duas coisas: soma todos os números contidos no array
      e multiplica todos os número do array. Seu retorno é a soma dos números na posição 0
      e a multiplicação dos mesmos na posição 1. Sendo assim, a função metodo(array) podia
      ser refatorada como duas funções: somaDosElementos(array) e multiplicacaoDosElementos(array).
      OBS.: interessante que se o array estiver ordenado a função  multiplicacaoDosElementos
      retorna o fatorial de array.length.
*/


/* RESPOSTAS DAS QUESTÕES DE ESCRITA DE CÓDIGO */

/* EXERCÍCIO 4 */
/* a. */
function idadeEmAnosCaninos(idade) {
   return idade * 7;
}

/* b. */
function apresentacao(nome, idade, endereco, estudante) {
   let estuda;
   if(estudante) {
      estuda = "sou";
   } else {
      estuda = "não sou";
   }

   return "Eu sou " + nome + ", tenho " + idade + " anos, moro em " +
           endereco + " e " + estuda + " estudante.";
}


/* EXERCÍCIO 5 */
function numeroEmAlgarismoRomano(numero) {
   console.log(numero)
   let algarismoRomano = "X";
   let novoNumero = numero - 10;

   const um = "I";
   const dois = "II";
   const tres = "III";
   const quatro = "IV";
   const cinco = "V";
   const seis = cinco + um;
   const sete = cinco + dois;
   const oito = cinco + tres;
   const nove = "IX";

   if(novoNumero >= 10) {
      algarismoRomano += "X";
      novoNumero -= 10;
   }
   
   if(novoNumero > 0) {
      if(novoNumero === 1) {
         algarismoRomano += um;
      } else if(novoNumero === 2) {
         algarismoRomano += dois;
      } else if(novoNumero === 3) {
         algarismoRomano += tres;
      } else if(novoNumero === 4) {
         algarismoRomano += quatro;
      } else if(novoNumero === 5) {
         algarismoRomano += cinco;
      } else if(novoNumero === 6) {
         algarismoRomano += seis;
      } else if(novoNumero === 7) {
         algarismoRomano += sete;
      } else if(novoNumero === 8) {
         algarismoRomano += oito;
      } else if(novoNumero === 9) {
         algarismoRomano += nove;
      }
   }

   return algarismoRomano;
}

function seculoQueAnoPertence(ano) {
   let seculo;
   if(ano % 100 === 0) {
      seculo = ano / 100;
   } else {
      seculo = (Math.floor(ano / 100) + 1);
   }

   const algarismoRomano = numeroEmAlgarismoRomano(seculo);

   return "O ano " + ano + " pertence ao século " + algarismoRomano;
}


/* EXERCÍCIO 6 */
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

/* a. */
function quantidadeDeElementos(array) {
   return array.length;
}

/* b. */
function par(numero) {
   return numero % 2 === 0;
}

/* c. */
function numerosParesDeUmArray(array) {
   const arrayDePares = [];

   for(let numero of array) {
      if(numero % 2 === 0) arrayDePares.push(numero);
   }

   return arrayDePares;
}

/* d. */
function numerosPares(array) {
   const arrayDePares = [];

   for(let numero of array) {
      if(par(numero)) arrayDePares.push(numero);
   }

   return arrayDePares;
}