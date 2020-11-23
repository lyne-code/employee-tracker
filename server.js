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

 ])