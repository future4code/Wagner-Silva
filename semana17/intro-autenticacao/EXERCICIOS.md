**EXERCÍCIOS AULA 55 - INTRODUÇÃO A AUTENTICAÇÃO**


**Exercício 1**\
a) Usar números resultaria numa quantidade **ENORME** de números para não haver conflitos.\
Já utilizando strings, podemos agrupar **números**, **símbolos** e **letras**, dando uma\
possibilidade muito menor de haver conflitos com uma quantidade de caracteres reduzida\
em comparação à utilização de números.\

**Exercício 2**\
a) Após utilizar criar a conexão com o banco de dados, implementa-se uma função para\
criar um usuário no banco, tendo como parâmetros uma _id_, um _email_ e uma _password_\
(senha).
b)
~~~sql
CREATE TABLE UserAuthentication(
	id VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
~~~

**Exercício 3**\
a) É preciso porque o tipo esperado pela função para esse parâmetro é uma string, e como\
estamos utilizando variáveis ambiente através do _dotenv_, é preciso fazer esse cast explícito.

**Exercício 4**\
Apenas exercícios de código.

**Exercício 5**
Apenas exercícios de código.