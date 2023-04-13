const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'HandsomeJack2012!',
        database: 'kaye_corporation_db'
    },
    console.log(`Connected to the kaye_corporation_db database.`)
);

db.connect();

const mainMenu = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Welcome to the employee management interface. Please select what you would like to do.',
                name: 'options',
                choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
            }
        ])
        .then((data) => {

            if (data.options === 'View All Departments') {
                viewAllDepartments();
                // Run a function that executes a department Query
            } else if (data.options === 'View All Roles') {
                viewAllRoles();
                // Run a function that executes a role Query
            } else if (data.options === 'View All Employees') {
                viewAllEmployees();
                // Run a function that executes an employee Query
            } else if (data.options === 'Add a Department') {
                addDepartment();
                // Run a function that executes a department Query
            } else if (data.options === 'Add a Role') {
                deptOptions();
                // Run a function that asks for the department info and inserts into the appropriate table
            } else if (data.options === 'Add an Employee') {
                console.log('Option 6');
                // Run a function that executes a department Query
            } else if (data.options === 'Update an Employee Role') {
                console.log('Option 7');
                // Run a function that executes a department Query
            }
        }
        )
};

const viewAllDepartments = () => {
    db.query('SELECT * FROM department', (err, res) => {
        if (res) {
            console.log('\n');
            console.table(res);
        } else {
            console.log(err);
            console.log("Use the 'Up' or 'Down' Arrow Key to Return to the main menu...");
        }
    })
    mainMenu();
};

const viewAllRoles = () => {
    db.query('SELECT * FROM role', (err, res) => {
        if (res) {
            console.log('\n');
            console.table(res);
        } else {
            console.log(err);
            console.log("Use the 'Up' or 'Down' Arrow Key to Return to the main menu...");
        }
    })
    mainMenu();
};

const viewAllEmployees = () => {
    db.query('SELECT * FROM employee JOIN role ON employee.role_id = role.id', (err, res) => {
        if (res) {
            console.log('\n');
            console.table(res);
        } else {
            console.log(err)
            console.log("Use the 'Up' or 'Down' Arrow Key to Return to the main menu...");
        }
    })
    mainMenu();
};

const addDepartment = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter the name of the new department.',
                name: 'newDeptTitle',
            },
        ])
        .then((data) => {
            const newDeptName = data.newDeptName;
            db.query('INSERT INTO department SET ?', {
                name: newDeptName
            }, (err, res) => {
                if (res) {
                    console.log('Successfully added the new department to the database!');
                } else {
                    console.log(err);
                    console.log("Use the 'Up' or 'Down' Arrow Key to Return to the main menu...");
                }
            });
            mainMenu();
        })
};

const addRole = (departmentChoices) => {

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter the ID of the new role.',
                name: 'newRoleId',
            },
            {
                type: 'input',
                message: 'Please enter the title of the new role.',
                name: 'newRoleTitle',
            },
            {
                type: 'input',
                message: 'Please enter the salary of employees holding this role.',
                name: 'newRoleSalary',
            },
            {
                type: 'list',
                message: 'Please enter the Department ID this role exists within.',
                choices: departmentChoices,
                name: 'newRoleDept',
            }
        ])
        .then((data) => {
            db.query('INSERT INTO role SET ?', {
                id: data.newRoleId,
                title: data.newRoleTitle,
                salary: data.newRoleSalary,
                department_id: data.newRoleDept
            }, (err, res) => {
                if (res) {
                    console.log('Successfully added the new Role to the database!');
                } else {
                    console.log(err);
                    console.log("Use the 'Up' or 'Down' Arrow Key to Return to the main menu...");

                }
            });
            mainMenu();
        })
};

// function addEmployee = () => {

// };

// function updateRole = () => {

// };

const deptOptions = () => {
    db.query('SELECT * FROM department', (err, res) => {
        if (res) {
            const depts = res.map(({ id, name }) => ({
                name: name,
                value: id
            }));
            addRole(depts)
        } else {
            console.log(err);
            mainMenu()
        }
    })
};

mainMenu();