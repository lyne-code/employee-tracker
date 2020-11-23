drop database if exists employeedb;
create database employeedb;
use employeedb;

create table department (
id int auto_increment primary key,
name varchar(30) not null
);

create table role (
id int auto_increment primary key,
title varchar(30) not null,
salary decimal (10,0),
department_id int,
foreign key(department_id) references department(id)
);

create table employee (
id int auto_increment primary key,
first_name varchar(30) not null,
last_name varchar(30) not null,
role_id int,
manager_id int,
foreign key(role_id) references role(id),
foreign key(manager_id) references employee(id)
);
