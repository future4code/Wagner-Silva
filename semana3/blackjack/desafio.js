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
   let cartasJogador =[];
   let cartasComputador = [];
   let pontuacaoJogador;
   let pontuacaoComputador;

   for(let i = 0; i < 4; i++) {
      if(i % 2 === 0) {
         cartasJogador.push(comprarCarta());
      } else {
         cartasComputador.push(comprarCarta());
      }
   }


   while(cartasJogador[0].texto.indexOf('A') === 0 && cartasJogador[1].texto.indexOf('A') === 0) {
      console.log("Sorteando cartas do jogador novamente");
      cartasJogador = [];
      for(let i = 0; i < 2; i++) {
         cartasJogador.push(comprarCarta());
      }
   }

   while(cartasComputador[0].texto.indexOf('A') === 0 && cartasComputador[1].texto.indexOf('A') === 0) {
      console.log("Sorteando cartas do computador novamente");
      cartasComputador = [];
      for(let i = 0; i < 2; i++) {
         cartasComputador.push(comprarCarta());
      }
   }

   pontuacaoJogador = cartasJogador[0].valor + cartasJogador[1].valor;
   pontuacaoComputador = cartasComputador[0].valor + cartasComputador[1].valor;
   let cartasJogadorEmTexto = cartasJogador[0].texto + " " + cartasJogador[1].texto;

   while(confirm("Suas cartas são: " + cartasJogadorEmTexto + ". A carta revelada do computador é: " +
                  cartasComputador[0].texto + ".\nDeseja comprar mais carta ?")) {
      cartasJogador.push(comprarCarta());
      cartasJogadorEmTexto += " " + cartasJogador[cartasJogador.length - 1].texto;
      pontuacaoJogador += cartasJogador[cartasJogador.length - 1].valor;

      if(pontuacaoJogador > 21) {
         break;
      }
   }
   
   let cartasComputadorEmTexto = cartasComputador[0].texto + " " + cartasComputador[1].texto;
   if(pontuacaoJogador <= 21) {
      while(pontuacaoComputador < pontuacaoJogador) {
         cartasComputador.push(comprarCarta());
         pontuacaoComputador += cartasComputador[cartasComputador.length - 1].valor;
         cartasComputadorEmTexto += " " + cartasComputador[cartasComputador.length - 1].texto;
      }
   }


   console.log("Suas cartas são " + cartasJogadorEmTexto + ". Sua pontuação é: " + pontuacaoJogador);
   console.log("As cartas do computador são " + cartasComputadorEmTexto + ". Sua pontuação é: " + pontuacaoComputador);

   if(pontuacaoJogador === pontuacaoComputador) console.log("Empate!"); 
   else if(pontuacaoJogador <= 21 && pontuacaoJogador > pontuacaoComputador) console.log("O usuário ganhou!");
   else console.log("O computador ganhou!");

} else {
   console.log("O jogo acabou");
}