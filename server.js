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
    let allDept = 'SELECT * FROM department'
    db.query(allDept, (err, res) => {
        if (res) {
            console.table(res);
        } else {
            console.log(err)
        }
    })
    mainMenu();
};

const viewAllRoles = () => {
    let allRoles = 'SELECT * FROM role'
    db.query(allRoles, (err, res) => {
        if (res) {
            console.table(res);
        } else {
            console.log(err)
        }
    })
    mainMenu();
};

const viewAllEmployees = () => {
    let allEmps = 'SELECT * FROM employee'
    db.query(allEmps, (err, res) => {
        if (res) {
            console.table(res);
        } else {
            console.log(err)
        }
    })
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

mainMenu();