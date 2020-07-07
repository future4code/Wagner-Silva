# EXERCÍCIOS AULA 51 - INTRODUÇÃO A BANCO DE DADOS E SQL

**Exercício 1**
a) Temos o _VARCHAR_ para indicar que é um conjunto de caracteres;
   temos o _DATE_ para indicar uma data;
   temos também o _PRIMARY KEY_ indicando que o campo _id_ é uma **chave primária**;
   temos o _NOT NULL_ indicando que o campo não pode ser **nulo**;
   além do _CREATE TABLE_ que define a criação de uma tabela.
b) Em **_SHOW DATABASES_** mostrou os bancos de dados que estão cadastrados no servidor
de acordo com o usuário, que no meu caso foram: **information_schema** e **julian_wagner_silva_db**;
   em **_SHOW TABLES_** foi mostrado as tabelas que foram criadas, que até o momento foi apenas a
tabela **Actor**.
c) Mostra todos os campos existentes na tabela **Actor**.

**Exercício 2**
b) O erro diz que a entrada _002_ para a _PRIMARY KEY_ está duplicada, ou seja, **já existe** uma _id_
de valor 002 cadastrada no banco de dados. 
c) O erro diz que os valores que estão sendo adicionados não batem com a definição da tabela, e isso
ocorre porque não estamos definindo na inserção valores para todos os campos da tabela. A solução é adicionar os campos que estão faltando.
d) O erro diz que o campo _name_ não possui um valor padrão. Para solucionar este problema, basta adicionarmos na inserção um valor para o _name_.
e) O erro diz que há um valor incorreto para um campo do tipo _DATE_, pois o valor que está sendo
passado é uma expressão matemática, e não uma data com a estrutura correta em **SQL**. A solução é
colocar a data entre **"**.

**Exercício 3**
c) Foi retornado todos os campos como **NULL**, pois não há dados que satisfaçam a busca.
e) O nome do campo foi descrito errado, pois não é _nome_ e sim _name_.

**Exercício 4**
a) A query acima precisa dos parênteses pois o _AND_ possui uma **precedência maior**, e portanto
o resultado final das comparações podia gerar inconsistências.

**Exercício 5**
a) O tipo de dados _TEXT_ guarda textos grandes.

**Exercício 6**



# QUERIES

* USE julian_wagner_silva_db

**Exercício 1**
* CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
* SHOW DATABASES;
  SHOW TABLES;
* DESCRIBE Actor;

**Exercício 2**
* INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "001", 
        "Tony Ramos",
        400000,
        "1948-08-25", 
    "male"
    );
* INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "002", 
        "Glória Pires",
        1200000,
        "1963-08-23",
        "female"
    );
* Query do item b
  INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "002", 
        "Glória Pires",
        1200000,
        "1963-08-23",
        "female"
    );
* INSERT INTO Actor (id, name, salary)
    VALUES(
        "003", 
        "Fernanda Montenegro",
        300000,
        "1929-10-19", 
        "female"
    );
* INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "003", 
        "Fernanda Montenegro",
        300000,
        "1929-10-19", 
        "female"
    );
* INSERT INTO Actor (id, salary, birth_date, gender)
    VALUES(
        "004",
        400000,
        "1949-04-18", 
        "male"
    );
* INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "004",
        "Antônio Fagundes",
        400000,
        "1949-04-18", 
        "male"
    );
* INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "005", 
        "Juliana Paes",
        719333.33,
        1979-03-26, 
        "female"
    );
* INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "005", 
        "Juliana Paes",
        719333.33,
        "1979-03-26", 
        "female"
    );
* INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "006", 
        "Wagner Moura",
        2000000,
        "1976-06-27", 
        "male"
    );
* INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "007", 
    "Camila Pitanga",
    200000,
    "1977-06-14", 
    "male"
    );

**Exercício 3**
* SELECT * FROM Actor WHERE gender = "female"
* SELECT salary FROM Actor WHERE name = "Tony Ramos";
* SELECT * FROM Actor WHERE gender = "invalid";
* SELECT id, name, salary FROM Actor WHERE salary <= 500000;
* SELECT id, nome from Actor WHERE id = "002";
* SELECT id, name from Actor WHERE id = "002";

**Exercício 4**
* SELECT * from Actor WHERE (name NOT LIKE "A%") AND salary > 350000;
* SELECT * from Actor WHERE (name LIKE "%G%" OR name LIKE "%g%");
* SELECT * from Actor WHERE (
	name LIKE "%A%" OR
    name LIKE "%a%" OR
    name LIKE "%G%" OR
    name LIKE "%g%") AND (salary BETWEEN 350000 and 900000);

**Exercício 5**
* CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);
* INSERT INTO Movie (id, name, synopsis, release_date, rating)
	VALUES (
		"001",
        "Se Eu Fosse Você",
        "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
        "2006-01-06",
        7
    );
* INSERT INTO Movie (id, name, synopsis, release_date, rating)
	VALUES (
		"002",
        "Doce de Mãe",
        "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
        "2012-12-27",
        10
    );
* INSERT INTO Movie (id, name, synopsis, release_date, rating)
	VALUES (
		"003",
        "Dona Flor e Seus Dois Maridos",
        "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
        "2017-11-02",
        8
    );
* INSERT INTO Movie (id, name, synopsis, release_date, rating)
	VALUES (
		"004",
        "Tropa de Elite",
        "O capitão da força especial da Polícia Militar do Rio de Janeiro treina dois recrutas novatos para que possam sucedê-lo.",
        "2007-10-05",
        9
    );

**Exercício 6**
* SELECT id, name, rating FROM Movie WHERE id = "004";
* SELECT * FROM Movie WHERE name = "Doce de Mãe";
* SELECT id, name, synopsis FROM Movie WHERE rating >= 7;

**Exercício 7**
* SELECT * FROM Movie WHERE name LIKE "%vida%";
* SELECT * FROM Movie WHERE name LIKE "%vida%" OR synopsis LIKE "%vida%";
* SELECT * FROM Movie WHERE release_date < "2020-07-06";
* SELECT * FROM Movie WHERE 
	(name LIKE "%vida%" OR synopsis LIKE "%vida%") AND
	(release_date < "2020-07-06") AND
    (rating > 7);