const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
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
              viewAllDepartments();
              // Run a function that executes a department Query
          } else if (data.options === 'View All Roles') {
              console.log('Option 2');
              viewAllRoles();
              // Run a function that executes a role Query
          } else if (data.options === 'View All Employees') {
              console.log('Option 3');
              viewAllEmployees();
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

const viewAllDepartments = () => {
    let allDept = db.query('SELECT * FROM department')
    console.log(allDept);
    mainMenu();
};

const viewAllRoles = () => {
    let allRoles = db.query('SELECT * FROM role')
    console.log(allRoles);
    mainMenu();
};

const viewAllEmployees= () => {
    let allEmps = db.query('SELECT * FROM employee')
    console.log(allEmps);
    mainMenu();
};

// function addDepartment = () => {
  
// };

// function addRole = () => {
  
// };

// function addEmployee = () => {
  
// };

// function updateRole = () => {
  
// };

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mainMenu();