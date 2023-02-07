USE kaye_corporation_db;

INSERT INTO  department (id, name)
VALUES (001, "Development"),
       (002, "Marketing"),
       (003, "Accounting"),
       (004, "Public Relations"),
       (005, "Customer Service"),
       (006, "Human Resources");

INSERT INTO  role (id, title, salary, department_id)
VALUES (59443, "Engineer", 1.40, 001),
       (92042, "Engineer", 1.22, 001),
       (47448, "Manager", 1.32, 002),
       (94633, "Marketing Rep", 1.01, 002),
       (60388, "PR Rep", 1.13, 004),
       (37488, "Manager", 1.37, 003),
       (19334, "Manager", 1.71, 001),
       (64733, "Manager", 1.43, 006),
       (78447, "Accountant", 1.13, 003),
       (12155, "PR Rep", 1.17, 003),
       (19768, "Customer Service Rep", .91, 005),
       (88495, "HR Officer", 1.01, 006),
       (44378, "Customer Service Rep", .86, 005),
       (11093, "Manager", .95, 005),
       (40103, "Accountant", 1.20, 003),
       (77547, "Customer Service Rep", .79),
       (58944, "Manager", 1.15, 004),
       (66574, "Customer Service Rep", .90, 005),
       (27794, "HR Officer", 1.01, 006);

-- INSERT INTO  employee (id, title, salary, department_id)
-- VALUES (59443, "Engineer", 1.40, 001),
--        (92042, "Engineer", 1.22, 001),
--        (47448, "Manager", 1.32, 002),
--        (94633, "Marketing Rep", 1.01, 002),
--        (60388, "PR Rep", 1.13, 004),
--        (37488, "Manager", 1.37, 003),
--        (19334, "Manager", 1.71, 001),
--        (64733, "Manager", 1.43, 006),
--        (78447, "Accountant", 1.13, 003);


