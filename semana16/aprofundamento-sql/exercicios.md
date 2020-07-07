**EXERCÍCIOS DA AULA 52 - APROFUNDAMENTO SQL**

**Exercício 1**\
a) Altera a tabela **_Actor_** removendo a coluna _salary_.\
b) altera a tabela **_Actor_**, trocando o campo _gender_ para _sex_, com **VARCHAR(6)**.\
c) A mesma situação do item **b**, porém muda o _VARCHAR_ para **VARCHAR(255)**.\
d) Basta usar a mesma query usada nas duas últimas questões, trocando apenas **VARCHAR(100)**.\

**Exercício 2**\
d) Não houve erro, funcionou como se estivesse atualizando um registro existente. Porém, foi\
mostrado que nenhuma linha foi afetada.

**Exercício 3**\



**QUERIES**


**Exercício 2**
* ~~~sql
    UPDATE Actor
    SET name = "Moacyr Franco"
    WHERE id = "003";
~~~
* ~~~sql
    UPDATE Actor
    SET name = "JULIANA PÃES"
    WHERE name = "Juliana Paes";
~~~
* ~~~sql
    UPDATE Actor
    SET 
		(name = "Moacyr Franco",
		birth_date = "1936-10-05",
        salary = 600000,
        gender = "male")
    WHERE id = "005";

**Exercício 3**
* ~~~sql
    DELETE FROM Actor WHERE name = "Tony Ramos";
~~~
* ~~~sql
    DELETE FROM Actor WHERE name = "Fernanda Montenegro";
~~~
* ~~~sql
    DELETE FROM Actor WHERE (gender = "male") AND (salary > 1200000);
~~~

**Exercício 4**
* ~~~sql
    SELECT MAX(salary) FROM Actor;
~~~
*~~~sql
    SELECT MIN(salary) FROM Actor WHERE gender = "female";
~~~
* ~~~sql
    SELECT COUNT(*) FROM Actor WHERE gender = "female";
~~~
* ~~~sql
    SELECT SUM(salary) FROM Actor;
~~~

**Exercício 5**
