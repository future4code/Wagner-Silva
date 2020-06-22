// a. O console retorna "exercicio1.ts(3,1): error TS2322: Type '1' is not assignable to type 'string'"
// b. Utilizando "number | string" na declaração de tipo
// c.
const objPessoa1: { nome: string, idade: number, corFavorita: string } = {
    nome: "Wagner",
    idade: 21,
    corFavorita: "preto"
}

// d.
type PessoaD = {
    nome: string,
    idade: number,
    corFavorita: string
}

const pessoa1: PessoaD = {
    nome: "pessoa1",
    idade: 22,
    corFavorita: "cor"
}

const pessoa2: PessoaD = {
    nome: "pessoa2",
    idade: 22,
    corFavorita: "cor"
}

const pessoa3: PessoaD = {
    nome: "pessoa3",
    idade: 22,
    corFavorita: "cor"
}

// e.
enum CoresArcoIris {
    AZUL = "azul",
    VIOLETA = "violeta",
    ANIL = "anil",
    VERDE = "verde",
    AMARELO = "amarelo",
    LARANJA = "laranja",
    VERMELHO = "vermelho"
}

type PessoaE = {
    nome: string,
    idade: number,
    corFavorita: CoresArcoIris
}
