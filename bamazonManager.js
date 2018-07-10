var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_productsdb"
});

connection.connect(function (err) {
    if (err) throw err;
    // run the menuOptions function after the connection is made to prompt the user
    menuOptions()
    
});

function menuOptions () {
    inquirer.prompt([{
        name: "managerOptions",
        message: "What would you like to do?",
        type: "list",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
    }]).then(function(choice){
        if() {
            productsView()
        }
        if() {
            inventoryView()
        }
        if() {
            inventoryAdd()
        }
        if() {
            addProduct()
        }



    })
}