USE kaye_corporation_db;

INSERT INTO department (name)
VALUES ("Development"),
       ("Marketing"),
       ("Accounting"),
       ("Customer Service"),
       ("Human Resources");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Engineer", 1.40, 1),
       (2, "Marketing Rep", 1.01, 2),
       (3, "Accountant", 1.13, 3),
       (4, "CS Rep", 1.32, 4),
       (5, "HR Rep", 1.13, 5),
       (6, "Senior Engineer", 1.40, 1),
       (7, "Senior Marketing Rep", 1.01, 2),
       (8, "Controller", 1.13, 3),
       (9, "Senior Customer Service Rep", 1.32, 4),
       (10, "Senior Human Resources Rep", 1.13, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (926, "Cloe", "Nioclas", 6, NULL),
       (715, "Dmitriy", "Georgeanna", 7, NULL),
       (263, "Alyonka", "Gunner", 8, NULL),
       (439, "Algar", "Val", 9, NULL),
       (581, "Rebecca", "Reynold", 10, NULL),
       (318, "John", "Appleseed", 1, 926),
       (679, "Claud", "Dulcibella", 1, 926),
       (842, "Manuela", "Gertraud", 2, 715),
       (703, "Ottmar", "Doyle", 2, 715),
       (633, "Tyrone", "Evangelista", 3, 263),
       (437, "Promise", "Varlaam", 3, 263),
       (279, "Aiden", "Charissa", 4, 439),
       (885, "Aleksey", "Nigella", 4, 439),
       (212, "Valarie", "Zavanna", 5, 581),
       (197, "Remington", "Mitya", 5, 581),
       (364, "Mary", "Zola", 1, 926),
       (222, "Palmira", "Matilde", 1, 926),
       (775, "Dwayne", "Joseph", 1, 926),
       (669, "Xander", "Ryland", 2, 715),
       (927, "Emmanuele", "Val", 4, 439),
       (306, "Esfir", "Alya", 5, 581),
       (582, "Jason", "Erma", 2, 715);