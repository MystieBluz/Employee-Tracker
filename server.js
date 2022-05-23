// Packages
const mysql = require('mysql2');
const inquirer = require('inquirer');
require('dotenv').config();

// Connections
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root2022',
    database: employeeInfo_db,
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

