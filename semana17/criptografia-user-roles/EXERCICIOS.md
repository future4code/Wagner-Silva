**EXERCÍCIOS AULA 56 - CRIPTOGRAFIA E USER ROLES**

**Exercício 1**\
a) _round_ é a quantidade de vezes que um dado será "_hasheado"_, ou seja, **quanto maior o valor**\
de _round_, mais lento será a execução do algoritmo, porém **obteremos mais segurança**;\
o _salt_ é uma **string aleatória** adicionada ao dado que queremos criptografar antes do hash ser\
feito;\
São recomendados valores não muito altos e nem muito baixos para equilibrar a segurança e a rapidez\
do código;\
Foi utilizado o valor **12**, pois é um valor considerado ideal.\

**Exercício 2**
a) Primeiramente deve ser modificado o _endpoint_ de **cadastro**, pois até o momento não há nenhuma\
senha com _hash_ no banco.\
d) Não. Esse _endpoint_ depende do token, e o token já é dado de acordo com o _login_ e o _cadastro_,\
que já possuem a manipulação correta dos dados criptografados.\

**Exercício 3**\
Apenas exercícios de código.\

**Exercício 4**\
Apenas exercícios de código.\

**Exercício 5**\
Apenas exercícios de código.\

**Exercício 6**\
Apenas exercícios de código.\

**Exercício 7**\
Apenas exercícios de código.\