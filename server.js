const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

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
                choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Exit Employee Tracker']
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
                // Run a function that asks for the department info and inserts into the appropriate table
            } else if (data.options === 'Add a Role') {
                deptOptionsNewRole();
                // Run a function that grabs department information, and calls a function which asks for the role info and inserts into the appropriate table
            } else if (data.options === 'Add an Employee') {
                roleOptionsNewEmp();
                // Run a function that grabs role information, and calls a function which asks for the employee info and inserts into the appropriate table
            } else if (data.options === 'Update an Employee Role') {
                employeeOptionsUpdateEmp();
                // Run a function that executes a department and role information, and calls a function which asks for the new role of the selected user.
            } else if (data.options === 'Exit Employee Tracker') {
                console.log("Thank you for using the employee tracker.");
                // Exits Employee Tracker
            }
        }
        )
};

const viewAllDepartments = () => {
    db.query('SELECT id AS Department_ID, name AS Department_Name FROM department ORDER BY id', (err, res) => {
        if (res) {
            console.log('\n');
            console.table(res);
            console.log('\n');
            mainMenu();
        } else {
            console.log(err);
            console.log('\n');
            mainMenu();
        }
    })
};

const viewAllRoles = () => {
    db.query('SELECT id AS Role_ID, title AS Job_Title, salary AS Salary_Divided_By_100K, department_id AS Department_ID FROM role GROUP BY id', (err, res) => {
        if (res) {
            console.log('\n');
            console.table(res);
            console.log('\n');
            mainMenu();
        } else {
            console.log(err);
            console.log('\n');
            mainMenu();
        }
    })
};

const viewAllEmployees = () => {
    db.query('SELECT id AS Employee_ID, first_name AS First_Name, last_name AS Last_Name, role_id AS Role_ID, manager_id AS Manager_ID FROM employee GROUP BY id', (err, res) => {
        if (res) {
            console.log('\n');
            console.table(res);
            console.log('\n');
            mainMenu();
        } else {
            console.log(err)
            console.log('\n');
            mainMenu();
        }
    })
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
            db.query('INSERT INTO department SET ?', {
                name: data.newDeptTitle
            }, (err, res) => {
                if (res) {
                    console.log('\n');
                    console.log('Successfully added the new department to the database!');
                    console.log('\n');
                    mainMenu();
                } else {
                    console.log('\n');
                    console.log(err);
                    console.log('\n');
                    mainMenu();
                }
            });
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
                    console.log('\n');
                    console.log('Successfully added the new Role to the database!');
                    console.log('\n');
                    mainMenu();
                } else {
                    console.log('\n');
                    console.log(err);
                    console.log('\n');
                    mainMenu();
                }
            });
        })
};

const addEmployee = (roleChoices) => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter the ID of the new employee.',
                name: 'newEmpId',
            },
            {
                type: 'input',
                message: "Please enter the new employee's first name.",
                name: 'newEmpFirstName',
            },
            {
                type: 'input',
                message: "Please enter the new employee's last name.",
                name: 'newEmpLastName',
            },
            {
                type: 'list',
                message: 'Please select the role of this employee.',
                choices: roleChoices,
                name: 'newEmpRole',
            },
            {
                type: 'input',
                message: "Please enter the employee of ID of the new employee's respective manager.",
                name: 'newEmpManager',
            }
        ])
        .then((data) => {
            db.query('INSERT INTO employee SET ?', {
                id: data.newEmpId,
                first_name: data.newEmpFirstName,
                last_name: data.newEmpLastName,
                role_id: data.newEmpRole,
                manager_id: data.newEmpManager
            }, (err, res) => {
                if (res) {
                    console.log('\n');
                    console.log('Successfully added the new employee to the database!');
                    console.log('\n');
                    mainMenu();
                } else {
                    console.log('\n');
                    console.log(err);
                    console.log('\n');
                    mainMenu();
                }
            });
        })
};

const updateEmployeeRole = (empChoices, roleChoices) => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Please select the employee you would like to update.',
                choices: empChoices,
                name: 'updEmpId',
            },
            {
                type: 'list',
                message: 'Please select the role of this employee.',
                choices: roleChoices,
                name: 'updEmpRole',
            }
        ])
        .then((data) => {
            console.log(data.updEmpRole);
            db.query(`UPDATE employee SET ? WHERE id = ${data.updEmpId}`, {
                role_id: data.updEmpRole
            }, (err, res) => {
                if (res) {
                    console.log('\n');
                    console.log("Successfully updated the employee's role in the database!");
                    console.log('\n');
                    mainMenu();
                } else {
                    console.log('\n');
                    console.log(err);
                    console.log('\n');
                    mainMenu();
                }
            });
        })
};

const deptOptionsNewRole = () => {
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

const roleOptionsNewEmp = () => {
    db.query('SELECT * FROM role', (err, res) => {
        if (res) {
            let roles = res.map(({ id, title }) => ({
                name: title,
                value: id
            }));
            addEmployee(roles);
        } else {
            console.log(err);

            mainMenu()
        }
    })
};

const employeeOptionsUpdateEmp = () => {
    db.query('SELECT * FROM employee', (err, res) => {
        if (res) {
            const emps = res.map(({ id, first_name, last_name }) => ({
                name: `${last_name}, ${first_name}`,
                value: id
            }));
            roleOptionsUpdateEmp(emps);
        } else {
            console.log(err);
            mainMenu()
        }
    })
};

const roleOptionsUpdateEmp = (empOptions) => {
    db.query('SELECT * FROM role', (err, res) => {
        if (res) {
            const roles = res.map(({ id, title }) => ({
                name: title,
                value: id
            }));
            updateEmployeeRole(empOptions, roles);
        } else {
            console.log(err);
            mainMenu()
        }
    })
};

mainMenu();