-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE vibetrack;

USE vibetrack;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14),
	codigo_ativacao VARCHAR(50)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);



insert into empresa (razao_social, codigo_ativacao) values ('primeiroEstilo', 'rock');
insert into empresa (razao_social, codigo_ativacao) values ('segundoEstilo', 'sertanejo');
insert into empresa (razao_social, codigo_ativacao) values ('terceiroEstilo', 'classico');
insert into empresa (razao_social, codigo_ativacao) values ('quartoEstilo', 'mpb');
insert into empresa (razao_social, codigo_ativacao) values ('quintoEstilo', 'alternativo');
insert into empresa (razao_social, codigo_ativacao) values ('sextoEstilo', 'jazz');

insert into aquario (descricao, fk_empresa) values ('primeiroEstilo', 1);
insert into aquario (descricao, fk_empresa) values ('segundoEstilo', 2);
insert into aquario (descricao, fk_empresa) values ('terceiroEstilo', 3);
insert into aquario (descricao, fk_empresa) values ('quartoEstilo', 4);
insert into aquario (descricao, fk_empresa) values ('quintoEstilo', 5);
insert into aquario (descricao, fk_empresa) values ('sextoEstilo', 6);

select * from usuario;

delete from usuario where id = 7;

select * from empresa;

update empresa set codigo_ativacao = 'classico' where id = 3;

update empresa set razao_social = 'estilo 3' where id = 3;

select * from usuario;

select * from aquario;

update aquario set descricao = 'primeiroEstilo' where id = 1;

delete from usuario where id = 10;

CREATE TABLE resposta_quiz (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    id_pergunta INT NOT NULL,
    resposta_escolhida INT NOT NULL,
    correta BOOLEAN NOT NULL,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

truncate table resposta_quiz;

select * from resposta_quiz;
DESCRIBE resposta_quiz;
select * from usuario;

delete from usuario where id = 2;

select * from empresa;

create view vw_acertos as
select us.nome,rq.id_pergunta,rq.resposta_escolhida,rq.correta,rq.data_hora
 from resposta_quiz rq join
 usuario us 
 on us.id = id_usuario;
 
 select * from vw_acertos;