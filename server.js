// Packages
const mysql = require('mysql2');
const inquirer = require('inquirer');
const conTable = require('console.table');
const figlet = require('figlet');
const chalk = require('chalk');

require('dotenv').config();

// Connections
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root2022',
    database: 'employeeTracker_db',
});

connection.connect((error) => {
    if (error) throw error;
    console.log(chalk.magenta.bold("*******************************************"));
    console.log(``);
    console.log(chalk.yellow.bold(figlet.textSync('Employee Tracker')));
    console.log(``);
    console.log(chalk.magenta.bold("*******************************************"));
    userPrompt();
  });


// Questions Array  
const userPrompt = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'options',
        message: 'What option would you like?',
        choices: ['View all departments',
                  'View all roles',
                  'View all employees',
                  'Add a department',
                  'Add a role',
                  'Add an employee',
                  'Update employee role',
                  'end']
     }
])
 .then((responses) => {
    const {options} = responses;

    if (options === "View all departments") {
        viewDepartments();
    }

    else if (options === "View all roles") {
        viewRoles();
    }

    else if (options === "View all employees") {
        viewEmployees();
    }

    else if (options === "Add a department") {
        addDepartment();
    }

    else if (options === "Add a role") {
        addRole();
    }

    else if (options === "Add an employee") {
        addEmployee();
    }

    else if (options === "Update employee role") {
        updateEmployee();
    }

    else {
        // Find other option to end questions
        connection.end();
    }
    })
}


viewDepartments = () => {
    const sql = `SELECT department.id AS id, department.name AS department FROM department`; 

  connection.promise().query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    userPrompt();
  }); 
}

viewRoles = () => {
    const sql = `SELECT role.id, role.title, department.name AS department
                 FROM role
                 INNER JOIN department ON role.department_id = department.id`;
    
    connection.promise().query(sql, (err, rows) => {
      if (err) throw err; 
      console.table(rows); 
      userPrompt();
    })
  };

  viewEmployees = () => {
    const sql = `SELECT employee.id, 
                        employee.first_name, 
                        employee.last_name, 
                        role.title, 
                        department.name AS department,
                        role.salary, 
                        CONCAT (manager.first_name, " ", manager.last_name) AS manager
                 FROM employee
                        LEFT JOIN role ON employee.role_id = role.id
                        LEFT JOIN department ON role.department_id = department.id
                        LEFT JOIN employee manager ON employee.manager_id = manager.id`;
  
    connection.promise().query(sql, (err, rows) => {
      if (err) throw err; 
      console.table(rows);
      promptUser();
    });
  };
  