const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require('inquirer');

const generateManager = ({ name, id, email, officeNumber}) =>
''
const generateEngineer = ({ name, id, email, github}) =>
''
const generateIntern = ({ name, id, email, school}) =>
''

const promptUser = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the Manager?',
            },
            {
                type: 'input',
                name: 'employees',
                message: 'How many employees do you have?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of the Manager?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the Manager?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the office number of the Manager?',
            },
            {
                type: 'list',
                name: 'job',
                message: 'What is the job of the employee?',
                choices: ['Engineer' , 'Intern'],
            },
        ])
    .then(answers => {
        const teamLeader = generateManager(answers.name, answers.id, answers.email, answers.officeNumber);
        for (i = 1; i < answers.employees; i++ ){
            if (answers.job == 'Engineer') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: 'What is the name of the Engineer?',
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: 'What is the id of the Engineer?',
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'What is the email of the Engineer?',
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: 'What is the github username of the Engineer?',
                        },
                    ])
                    .then(answers =>{
                        const engineer = generateEngineer(answers.name, answers.id, answers.email, answers.github);
                    });
            }
            if (answers.job == 'Engineer') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: 'What is the name of the Intern?',
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: 'What is the id of the Intern?',
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'What is the email of the Intern?',
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: 'What is the school of the Intern?',
                        },
                    ])
                    .then(answers =>{
                        const intern = generateIntern(answers.name, answers.id, answers.email, answers.school);
                    });
            }
        }
    });
}