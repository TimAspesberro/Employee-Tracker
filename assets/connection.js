const mysql = require('mysql2');



const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);


const viewDept = () => {
    db.query('SELECT * FROM departments', function (err, results) {
        console.log(results);
      });
};

const viewRoles = () => {
    db.query('SELECT * FROM roles', function (err, results) {
        console.log(results);
      });
};

const viewEmployees = () => {
    db.query('SELECT * FROM employees', function (err, results) {
        console.log(results);
      });
};

const addDept = () => {

};

const addRole = () => {

};

const addEmployee = () => {

};

const updateEmployeeRole = () => {

};