CREATE DATABASE universo_da_leitura;
USE universo_da_leitura;

CREATE TABLE autores(
autores_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
sobrenome VARCHAR(100)
);

CREATE TABLE editoras(
editoras_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
razao_social VARCHAR (150),
telefone VARCHAR(100)
);

CREATE TABLE livros(
livro_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
ISBN VARCHAR(13),
titulo VARCHAR(200),
ano_criacao DATE,
autor_id INT,
ano_publicacao DATE,
editora_id INT,
FOREIGN KEY (autor_id) REFERENCES autores(autores_id),
FOREIGN KEY (editora_id) REFERENCES editoras(editoras_id)
);

CREATE TABLE exemplares (
exemplares_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
livro_id INT,
sinistro BOOL 
);

CREATE TABLE associados (
associados_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
rg CHAR(7),
nome VARCHAR(50),
sobrenome VARCHAR(50),
endereco VARCHAR (150),
cidade VARCHAR(50),
estado VARCHAR(2)
);

 CREATE TABLE telefone(
	telefone_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	telefone VARCHAR(100),
	associados_id INT,
	FOREIGN KEY (associados_id) REFERENCES associados(associados_id)
);

CREATE TABLE emprestimos (
emprestimo_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
associado_id INT,
data_emprestimo DATE,
prazo_devolucao DATE,
data_devolucao DATE,
FOREIGN KEY (associado_id) REFERENCES associados(associados_id)
);

CREATE TABLE emprestimo_exemplares(
empexem_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
emprestimo_id INT,
exemplar_id INT,
FOREIGN KEY (emprestimo_id) REFERENCES emprestimos(emprestimo_id),
FOREIGN KEY (exemplar_id) REFERENCES exemplares(exemplares_id)
);

INSERT INTO associados(rg,nome,sobrenome,endereco,cidade,estado)
VALUES (1234567,"Marcos","Vinicius","Avenida Abílio Machado 100","BELO HORIZONTE ","MG"),
(2345678,"Julio","César","Avenida Afonso Pena 212" , "BELO HORIZONTE ","MG"),
(3456789,"Paulo","Gustavo","Avenida Professor Alfredo Balena 900", "BELO HORIZONTE","MG"), 
(4567890,"Katherine","Pierce","Avenida Afonso XII 300","BELO HORIZONTE","MG"),
(5678901, "Kelly","Natalie","Avenida Álvares Cabral" , "BELO HORIZONTE","MG");

INSERT INTO telefone(telefone,associados_id)
VALUES (12345678901,1),
(23456789012,2),
(34567890123,3),
(45678901234,4),
(56789012345,5),
(67890123456,6),
(78901234567,7),
(89012345678,8);

INSERT INTO autores(nome,sobrenome)
VALUES ("J.C","Tudor");

INSERT INTO editoras(razao_social,telefone)
VALUES ( "Wessel Materiais para Escritório Ltda",99999999999),
("COMERCIO DE LIVROS E REVISTAS CAJAMAR LTDA",88888888888),
("LIVROS E MUSICA, EDITORA E EVENTOS LTDA",77777777777);

INSERT INTO livros(ISBN,titulo,ano_criacao,autor_id,ano_publicacao,editora_id)
VALUES ("SHJDO","O homem de giz","2016-09-14",12,"2018-01-01",1),
("LODJHH","As outras pessoas","2019-07-24",13,"2020-01-23",2),
("AHDU12","The burning girls","2020-10-03",14,"2021-01-19",3),
("PPSK1","Garotas em chamas","2020-08-17",15,"2021-03-22",4),
("KE290","O que aconteceu com Annie","2018-11-20",16,"2019-05-15",5);

INSERT INTO exemplares(livro_id,sinistro)
VALUES (19056,false),
(84905,false),
(38459,false),
(92745,false),
(12223,false);

INSERT INTO emprestimo_exemplares(emprestimo_id,exemplar_id)
VALUES (390,12),
(400,13),
(410,14);

INSERT INTO emprestimos(associado_id,data_emprestimo,prazo_devolucao,data_devolucao)
VALUES (1,"2015-04-01","2015-05-01","2015-05-04"),
(2,"2019-08-12","2019-09-12","2019-12-01"),
(3,"2018-03-28","2018-04-28","2018-04-28");

DELETE FROM associados where associados_id=3;
-- 	DELETE FROM associados where associados_id=3	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`universo_da_leitura`.`emprestimos`, CONSTRAINT `emprestimos_ibfk_1` FOREIGN KEY (`associado_id`) REFERENCES `associados` (`associados_id`))	0,117 sec
DELETE FROM livros where livro_id=3;
-- sem erros, operação bem sucedida 
UPDATE associados
SET endereco="Rua das flores,860"
where associado_id=3;




















