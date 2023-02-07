const inquirer = require('inquirer');

const viewRole = require('viewrole');
const viewEmployee = require('viewrole');
const addRole = require('viewrole');
const updateEmployee = require('viewrole');
const addDepartment = require('viewrole');
const addEmployee = require('viewrole');
const viewDepartment = require('viewrole');

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
                console.log('Option 1');
                // Run a function that executes a department Query
            } else if (data.options === 'View All Roles') {
                console.log('Option 2');
                // Run a function that executes a role Query
            } else if (data.options === 'View All Employees') {
                console.log('Option 3');
                // Run a function that executes an employee Query
            } else if (data.options === 'Add a Department') {
                console.log('Option 4');
                // Run a function that executes a department Query
            } else if (data.options === 'Add a Role') {
                console.log('Option 5');
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

// function viewDepartment = () => {

// };

// function viewRole = () => {
    
// };

// function viewEmployee = () => {
    
// };

// function addDepartment = () => {
    
// };

// function addRole = () => {
    
// };

// function addEmployee = () => {
    
// };

// function updateRole = () => {
    
// };

mainMenu();