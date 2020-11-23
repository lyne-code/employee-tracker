use employeedb;
insert into department (name) values("sales"), ("engineering"), ("finance"), ("legal");
insert into role (title, salary, department_id) values
("sales lead", 100000, 1), 
("salesperson", 80000, 1),
("lead engineer", 150000, 2),
("software engineer", 120000, 2),
("accountant", 125000, 3),
("legal team lead", 250000, 4),
("lawyer", 190000, 4),
("software engineer", 120000, 2);

insert into employee (first_name, last_name, role_id, manager_id) values
("Phineas", "Doe", 1, null),
("Mike", "Spence", 2, null),
("Ashley", "Madison", 3, null),
("Kevin", "O'leary", 4, null),
("Malia", "Manderin", 6, null),
("Olivia", "Lourd", 7, null),
("Tom", "Allen", 8, null),
("Jack", "Hammer", 10, null);

update employee set manager_id = 1 where id = 2;
update employee set manager_id = 3 where id = 1;
update employee set manager_id = 3 where id = 4;
update employee set manager_id = 7 where id = 8;
update employee set manager_id = 6 where id = 10;
