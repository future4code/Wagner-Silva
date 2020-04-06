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