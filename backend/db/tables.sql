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
insert into author (name, surname) values ('Ana','Iturgaiz');
insert into author (name, surname) values ('Eduardo','Mendoza');
insert into author (name, surname) values ('Isabel','Abenia');
insert into author (name, surname) values ('H.P.','Lovecraft');
insert into author (name, surname) values ('Paul','Tremblay');
insert into author (name, surname) values ('Bram','Stoker');
insert into author (name, surname) values ('Gillian','Flynn');
insert into author (name, surname) values ('Juan','Gómez-Jurado');
insert into author (name, surname) values ('Javier','Castillo');
insert into author (name, surname) values ('John','Connolly');
insert into author (name, surname) values ('Tite','Kubo');
insert into author (name, surname) values ('Masashi','Kishimoto');




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

insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-0007123810','The Lord of the Rings',12,115,20,'EN',3,2);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-0007458424','The Hobbit',8,50,18.5,'EN',3,2);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-8466671781','Roma soy yo',30,12,20.5,'ES',1,1);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-0007123855','Africanus',10,30,20,'ES',3,1);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-0007458477','Las legiones malditas',8,50,18.5,'ES',3,1);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-8466671799','La traición de Roma',30,12,20.5,'ES',3,1);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-1113458477','Black Cat',8,50,18.5,'EN',4,4);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-2226671799','The Duke and I',30,12,20.5,'EN',5,5);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3337458477','El Eco Negro',8,50,18.5,'ES',2,3);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-0007123821','The Silmarillion',4,2,32,'EN',3,2);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-0007123541','Naruto vol1',6,4,25,'ES',4,19);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-0007873541','Bleach vol1',8,6,25,'ES',4,18);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3407873541','Te espero en el fin del mundo',12,8,22,'ES',5,6);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3456873541','Valiente Vera, pequeña Sara',5,2,16,'ES',5,6);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3456875441','El Resplandor',8,20,15,'ES',6,7);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3256875441','Carrie',10,17,12.50,'EN',6,7);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3234875441','Bajo las estrellas',8,26,15.50,'ES',1,8);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3234865441','La mirada de la ausencia',13,11,21.45,'ES',1,8);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3286875441','El laberinto de las aceitunas',6,16,13.50,'ES',1,9);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3239865441','Riña de gatos',9,15,18.75,'ES',1,9);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3287875441','El alquimista holandés',12,17,15.50,'ES',1,10);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3233265441','La última Sibila',6,12,22.75,'ES',1,10);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3287655441','La llamada de Cthulhu',20,55,11.50,'ES',6,11);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3285855441','El necronomicón',11,48,12.50,'ES',6,11);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3285655441','La cabaña del fin del mundo',15,35,21.50,'ES',6,12);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3285655441','Survivor song',5,11,17.75,'ES',6,12);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3285676441','Drácula',10,85,13.75,'ES',6,13);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-3285673441','La casa del juez',5,21,11.75,'ES',6,13);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-32876554765','Perdida',16,62,18.50,'ES',2,14);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-32876576765','Sharp Objects',4,9,13.25,'EN',2,14);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-32876576798','Reina roja',15,62,21.55,'ES',2,15);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-32876976798','Loba negra',11,26,18.75,'ES',2,15);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-32876976762','El día que se perdió la cordura',8,31,21.75,'ES',2,16);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-32876576762','La chica de nieve',15,65,21.75,'ES',2,16);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-32876576710','Todo lo que muere',10,21,16.25,'ES',2,17);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-32887576710','La canción de las sombras',25,39,21.75,'ES',2,17);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-35476576710','El camino blanco',13,23,15.25,'ES',2,17);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-32876554712','Amor se escribe con H y otras maneras de decirte te quiero',12,23,16.50,'ES',5,6);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-91876554712','Tú y yo en el corazón de Brooklyn',3,21,22.75,'ES',5,6);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-32876598712','Cada amanecer',5,12,13.70,'ES',5,6);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-32876598695','Te doy mi corazón',6,12,11.50,'ES',5,5);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-39876598695','El duque y yo',10,45,16.20,'ES',5,5);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-39656598695','Un marido inventado',9,18,15.35,'ES',5,5);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-32876554769','Naruto vol2',8,21,25,'ES',4,19);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-91876554754','Naruto vol3',6,35,25,'ES',4,19);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-32876548712','Naruto vol4',9,19,25,'ES',4,19);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-32879088695','Bleach vol2',3,23,25,'ES',4,18);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-39875626695','Bleach vol3',15,28,25,'ES',4,18);
insert into book (isbn,title,stock,sales,price,lang,category_id,author_id) values ('978-39656458695','Bleach vol4',5,34,25,'ES',4,18);







