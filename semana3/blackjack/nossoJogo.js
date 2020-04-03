/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de BlackJack!");

if(confirm("Quer iniciar uma nova rodada ?")) {
   const cartasJogador =[];
   const cartasComputador = [];

   for(let i = 0; i < 4; i++) {
      if(i % 2 === 0) {
         cartasJogador.push(comprarCarta());
      } else {
         cartasComputador.push(comprarCarta());
      }
   }

   pontuacaoJogador = cartasJogador[0].valor + cartasJogador[1].valor;
   pontuacaoComputador = cartasComputador[0].valor + cartasComputador[1].valor;

   console.log("Usuário - cartas: " + cartasJogador[0].texto + " " + cartasJogador[1].texto + ' - ' + pontuacaoJogador);
   console.log("Usuário - cartas: " + cartasComputador[0].texto + " " + cartasComputador[1].texto + ' - ' + pontuacaoComputador);

   if(pontuacaoJogador === pontuacaoComputador) {
      console.log("Empate!");
   } else if(pontuacaoJogador > pontuacaoComputador) {
      console.log("O usuário ganhou!");
   } else {
      console.log("O computador ganhou!");
   }

} else {
   console.log("O jogo acabou");
}