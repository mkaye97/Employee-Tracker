const inquirer = require('inquirer');

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
            console.log(data.options);

            if (data.options = 'View All Departments') {
                // Run a function that executes a department Query
            };

            if (data.options = 'View All Roles') {
                // Run a function that executes a role Query
            };

            if (data.options = 'View All Employees') {
                // Run a function that executes an employee Query
            };

            if (data.options = 'Add a Department') {
                // Run a function that executes a department Query
            };

            if (data.options = 'Add a Role') {
                // Run a function that asks for the department info and inserts into the appropriate table
            };

            if (data.options = 'Add an Employee') {
                // Run a function that executes a department Query
            };

            if (data.options = 'Update an Employee Role') {
                // Run a function that executes a department Query
            };
        }
        )
        }

mainMenu();