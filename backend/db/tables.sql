create schema library;
use library;
create table author(
	id int auto_increment primary key,
    name varchar(255),
    surname varchar(255)
);

insert into author (name, surname) values ('Santiago','Posteguillo');
insert into author (name, surname) values ('J.R.R','Tolkien');
insert into author (name, surname) values ('Michael','Connelly');

create table category(
	id int auto_increment primary key,
    name varchar(255)
);

insert into category (name) values ('Historical novel');
insert into category (name) values ('Thriller');
insert into category (name) values ('Fantasy');

create table book(
	isbn varchar(40),
    title varchar(255),
    stock int(4),
    sales int(4),
    price decimal(10,2),
    lang varchar(2),
    category_id int(4),
    author_id int(4),
    FOREIGN KEY (category_id) REFERENCES category(id),
    FOREIGN KEY (author_id) REFERENCES author(id)
);

insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-0007123810','The Lord of the Rings',10,30,20,'EN',3,2);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-0007458424','The Hobbit',8,50,18.5,'EN',3,2);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-8466671781','Roma soy yo',30,12,20.5,'ES',1,1);