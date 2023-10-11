const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const connection = require('./db/connection');

const startMenu = () => {
    inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: ["View All Employees", "View All Roles", "View All Departments", "Update Employee Role" , "Add Role", "Add Department", "Exit"]
    })
    .then((answer) => {
        switch (answer.start) {
            case "View All Employees":
                viewAllEmployees();
                break;
            case "View All Departments":
                viewAllDepartments();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Add Department":
                addDepartment();
                break;
            case "Add Role":
                addRole();
                break;
            case "Update Employee Role":
                updateEmployeeRole();
                break;
            case "Exit":
                connection.end();
                break;
        }
    });
};   

const viewAllEmployees = () => {
    connection.query("SELECT * FROM employee", (err, res) => {
        if (err) throw err;
        console.table(res);
        startMenu();
    });
};

const viewAllDepartments = () => {
    connection.query("SELECT * FROM department", (err, res) => {
        if (err) throw err;
        console.table(res);
        startMenu();
    });
};

const viewAllRoles = () => {
    connection.query("SELECT * FROM role", (err, res) => {
        if (err) throw err;
        console.table(res);
        startMenu();
    });
};

const addEmployee = () => {
    inquirer.prompt([
        {
            message: "What is the employee's first name?",
            name: "first_name",
            type: "input"
        },
        {
            message: "What is the employee's last name?",
            name: "last_name",
            type: "input"
        },
        {
            message: "What is the employee's role?",
            name: "role_id",
            type: "input"
        },
        {
            message: "Who is the employee's manager?",
            name: "manager_id",
            type: "input"
        }
    ])
    .then((answer) => {
        connection.query("INSERT INTO employee SET ?", answer, (err, res) => {
            if (err) throw err;
            console.table(res);
            startMenu();
        });
    });
};

const addDepartment = () => {
    inquirer.prompt([
        {
            message: "What is the name of the department?",
            name: "name",
            type: "input"
        }
    ])
    .then((answer) => {
        connection.query("INSERT INTO department SET ?", answer, (err, res) => {
            if (err) throw err;
            console.table(res);
            startMenu();
        });
    });
};

const addRole = () => {
    inquirer.prompt([
        {
            message: "What is the name of the role?",
            name: "title",
            type: "input"
        },
        {
            message: "What is the salary of the role?",
            name: "salary",
            type: "input"
        },
        {
            message: "What is the department ID of the role?",
            name: "department_id",
            type: "input"
        }
    ])
    .then((answer) => {
        connection.query("INSERT INTO role SET ?", answer, (err, res) => {
            if (err) throw err;
            console.table(res);
            startMenu();
        });
    });
};

const updateEmployeeRole = () => {
    inquirer.prompt([
        {
            message: "Which employee would you like to update?",
            name: "employee",
            type: "input"
        },
        {
            message: "What is the employee's new role?",
            name: "role_id",
            type: "input"
        }
    ])
    .then((answer) => {
        connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [answer.role_id, answer.employee], (err, res) => {
            if (err) throw err;
            console.table(res);
            startMenu();
        });
    });
};

const startApp = async() => {
    console.log('Welcome to the Employee Tracker!');
    console.log('Please choose an option below to get started:');

startMenu();
}

startApp();
