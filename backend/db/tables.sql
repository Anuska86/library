create schema library;
use library;

create table user(
	id int auto_increment primary key,
    user_name varchar(255),
    pass varchar(255),
    email varchar(255),
    salary float(9,2),
    type varchar(255)
);
insert into user (user_name, pass, email, salary, type) values ('MarcMarsella','1234', 'mmarsella@miempresa.com', 20000.34, 'Administrador');
insert into user (user_name, pass, email, salary, type) values ('LuisMaldonado','1111', 'lmaldonado@miempresa.com', 18065.37, 'user');
insert into user (user_name, pass, email, salary, type) values ('EstibalizLaza','1222', 'elara@miempresa.com', 20200.39, 'user');
insert into user (user_name, pass, email, salary, type) values ('JonMayura','2222', 'jmayura@miempresa.com', 35000.12, 'user');
insert into user (user_name, pass, email, salary, type) values ('JaneKole','3333', 'jkole@miempresa.com', 38001.99, 'Administrador');

select * from user;


create table author(
	id int auto_increment primary key,
    name varchar(255),
    surname varchar(255)
);

insert into author (name, surname) values ('Santiago','Posteguillo');
insert into author (name, surname) values ('J.R.R','Tolkien');
insert into author (name, surname) values ('Michael','Connelly');
insert into author (name, surname) values ('Yabuki','Kentaro');
insert into author (name, surname) values ('Julia','Quinn');
insert into author (name, surname) values ('Andrea','Longarela');
insert into author (name, surname) values ('Stephen','King');

create table category(
	id int auto_increment primary key,
    name varchar(255)
);

insert into category (name) values ('Historical novel');
insert into category (name) values ('Thriller');
insert into category (name) values ('Fantasy');
insert into category (name) values ('Manga');
insert into category (name) values ('Romance');
insert into category (name) values ('Terror');



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
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-0007123855','Africanus',10,30,20,'ES',3,1);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-0007458477','Las legiones malditas',8,50,18.5,'ES',3,1);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-8466671799','La traición de Roma',30,12,20.5,'ES',3,1);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-1113458477','Black Cat',8,50,18.5,'EN',4,4);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-2226671799','The Duke and I',30,12,20.5,'EN',5,5);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3337458477','El Eco Negro',8,50,18.5,'ES',2,3);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-0007123821','The Silmarillion',4,2,32,'EN',3,2);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-0007123541','Naruto vol1',6,4,25,'ES',4,4);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-0007873541','Bleach vol1',8,6,25,'ES',4,4);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3407873541','Te espero en el fin del mundo',12,8,22,'ES',5,6);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3456873541','Valiente Vera, pequeña Sara',5,2,16,'ES',5,6);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3456875441','El Resplandor',8,20,15,'ES',6,7);


