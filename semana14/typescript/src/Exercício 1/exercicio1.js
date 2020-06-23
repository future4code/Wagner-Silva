// a. O console retorna "exercicio1.ts(3,1): error TS2322: Type '1' is not assignable to type 'string'"
// b. Utilizando "number | string" na declaração de tipo
// c.
var objPessoa1 = {
    nome: "Wagner",
    idade: 21,
    corFavorita: "preto"
};
var pessoa1 = {
    nome: "pessoa1",
    idade: 22,
    corFavorita: "cor"
};
var pessoa2 = {
    nome: "pessoa2",
    idade: 22,
    corFavorita: "cor"
};
var pessoa3 = {
    nome: "pessoa3",
    idade: 22,
    corFavorita: "cor"
};
// e.
var CoresArcoIris;
(function (CoresArcoIris) {
    CoresArcoIris["AZUL"] = "azul";
    CoresArcoIris["VIOLETA"] = "violeta";
    CoresArcoIris["ANIL"] = "anil";
    CoresArcoIris["VERDE"] = "verde";
    CoresArcoIris["AMARELO"] = "amarelo";
    CoresArcoIris["LARANJA"] = "laranja";
    CoresArcoIris["VERMELHO"] = "vermelho";
})(CoresArcoIris || (CoresArcoIris = {}));
