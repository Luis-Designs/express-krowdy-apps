create database if not exists dbexpress;

use dbexpress;

create table express(
    id              int primary key auto_increment,
    name            varchar(30)
);

insert into express(name) values('Express');