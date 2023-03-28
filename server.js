const inquirer = require('inquirer');

const questions = [
    {
        name: 'viewDept',
        message: 'Select an option.',
        choices: ['view all departments', 'view all roles', 'view all employees'],
        type: 'choices',
    },
];

function init () {
    inquirer
        .prompt(questions)
        .then(() => {

        })
        .catch((error) => {
            console.log(error);
        })
}