USE company_db;

INSERT INTO department (name) VALUES
('HR'),
('Engineering'),
('Marketing'),
('IT'),
('Administration'),
('Production');

INSERT INTO role (title, salary, department_id) VALUES
('HR Manager', 80000, 1),
('Software Engineer', 100000, 2),
('Marketing Specialist', 65000, 3),
('IT Director', 75000, 4),
('Admin Coordinator', 50000, 5),
('Senior Producer', 63000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Harry', 'Potter', 1, 1),
('Ron', 'Weasley', 2, 2),
('Hermione', 'Granger', 3, 3),
('Albus', 'Dumbledore', 4, 4),
('Neville', 'Longbottom', 5, 5),
('Luna', 'Lovegood', 6, 6);