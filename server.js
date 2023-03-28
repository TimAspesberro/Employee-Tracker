const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employee_DB',
});

connection.connect((err) => {
    if (err) {
        throw err;
    } else {
        startApp();
    }
});


const question = [
    {
        name: 'viewDept',
        type: 'list',
        message: 'Select an option.',
        choices: [
        'view all departments', 
        'view all roles', 
        'view all employees',
        'add a department',
        'add a role',
        'add an employee',
        'update an employee role'
        ],
    },
];

function startApp () {
    inquirer
        .prompt(question)
        .then((response) => {
            switch (response.action) {
                case "View all departments":
                  viewDept();
                break;
                case "View all roles":
                  viewRoles();
                break;
                case "View all employees":
                  viewEmployees();
                break;
                case "add a department":
                  addDeptartment();
                break;
                case "add a role":
                  addRole();
                break;
                case "add an employee":
                  addEmployee();
                break;
                case "update an employee role":
                  updateEmployeeRole();
                break;
            }
        })
        .catch((error) => {
            console.log(error);
        })
}