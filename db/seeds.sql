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
('Paralegal', 45000, 2),
('Accountant', 100000, 3), 
('Finance Manager', 150000, 3),
('Digital Marketing Manager', 130000, 4),
('Project Manager', 90000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Tony', 'Stark', 1, null),
('Peter', 'Parker', 1, 1),
('Karen', 'Page', 2, 2),
('Matt', 'Murdock', 2, null),
('Claire', 'Temple', 4, 4),
('Misty', 'Duhart', 3, 3),
('Jessica', 'Jones', 4, null),
('Bruce', 'Banner', 3, null);