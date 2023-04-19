create schema library;
use library;
create table writer(
	id int auto_increment primary key,
    name varchar(255),
    surname varchar(255)
);

insert into writer (name, surname) values ('Santiago','Posteguillo');
insert into writer (name, surname) values ('J.R.R','Tolkien');
insert into writer (name, surname) values ('Michael','Connelly');
