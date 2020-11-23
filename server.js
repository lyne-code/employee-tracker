var inquirer = require("inquirer");
var mysql = require("mysql");
// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "passwordEmployee",
    database: "employee_trackerDB"
  });


// Connection ID 
connection.connect(function(err) {
    if (err) throw err
    // run the start function after the connection is made to prompt the user
    startPrompt();
});

// Initial Prompt 
function start () {
inquirer
  .prompt([
      
    {
    type: "list",
    message: "Hey! What would you like to do?",
    name: "choice",
    choices: 
    [
        "View All Employees?", 
        "View All Employee's By Roles?",
        "View all Emplyees By Deparments", 
        "Update Employee",
        "Add Employee?",
        "Add Role?",
        "Add Department?"
    ]

    }

 ]).then(function(val) {
    switch (val.choice) {
        case "View All Employees?":
          viewAllEmployees();
        break;

        case "View All Employee's By Roles?":
          viewAllRoles();
        break;

        case "View all Employees By Departments":
          viewAllDepartments();
        break;

        case "Add Employee?":
          addEmployee();
        break;

        case "Update Employee":
          updateEmployee();
        break;

        case "Add Role?":
          addRole();
        break;

        case "Add Department?":
          addDepartment();
        break;

        }
    })
}

// View All Employees
function viewAllEmployees() {
    connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;", 
    function(err, res) {
      if (err) throw err
      console.table(res)
      startPrompt()
  })
}

// View All Roles 
function viewAllRoles() {
    connection.query("SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;", 
    function(err, res) {
    if (err) throw err
    console.table(res)
    startPrompt()
    })
  }

