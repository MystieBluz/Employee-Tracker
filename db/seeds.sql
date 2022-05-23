INSERT INTO department (name)
VALUES 
('Engineering'),
('Legal'),
('Finance'),
('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES
('Front End Developer', 80000, 1),
('Lead Engineer', 120000, 1),
('Attorney', 190000, 2), 
('Paralegal', 150000, 2),
('Accountant', 100000, 3), 
('Finance Manager', 150000, 3),
('Digital Marketing Manager', 100000, 4),
('Project Manager', 90000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Peter', 'Parker', 1, null),
('Tony', 'Stark', 1, 1),
('Matt', 'Murdock', 2, 2),
('Karen', 'Page', 2, null),
('Jessica', 'Jones', 4, 4),
('Misty', 'Duhart', 3, 3),
('Claire', 'Temple', 4, null),
('Bruce', 'Banner', 3, null);