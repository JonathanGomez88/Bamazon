var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table")

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_productsdb"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    getProducts()
    // displayProducts(getProducts());
});

function getProducts() {
    var productArray = []
    // calling the database to get ID, name of item, price and quantity
    connection.query("SELECT id AS 'Item Number', product_name AS 'Product', price AS 'Sales Price', stock_quantity AS 'Available Stock' FROM products", function (err, results, fields) {
        if (err) throw err;
        // console.log(results)
        for (var i = 0; i < results.length; i++) {
            //  var dbObj = {
            //     product: results[i].product_name,
            //     ID: results[i].id,
            //     price: results[i].price,
            //     quantity: results[i].stock_quantity
            // }
            productArray.push(results[i].Product)
          }
      
        console.table(results)
        displayProducts(productArray)
    })
}

// function which shows the user all of the products for sale

function displayProducts(items) {

    inquirer
        .prompt([
            {
                name: "chooseProduct",
                type: "input",
                choices: items,
                message: "What is the item number of the product you would like to buy?"
            },

            {
                name: "quantity",
                type: "input",
                message: "How many would you like to purchase?"


            }
        ])
        .then(function (response) {

            // console.log(response)

            checkAvailability(response.chooseProduct, response.quantity)

       
        })
        
   
}

function checkAvailability (item, quantity) {
    // console.log(item)
    // console.log(quantity)
    connection.query ("SELECT product_name, stock_quantity, price FROM products WHERE id=?", [item], function(err, results, fields) {
        if (err) throw error 
        // console.log(results)
        var stock_quantity = results[0].stock_quantity
        var price = results[0].price
        var name = results[0].product_name
        
        // console.log(stock_quantity)
        // console.log(price)
        // console.log(name)

        if (parseFloat(stock_quantity) - parseFloat(quantity) > 0) {
            if (parseFloat(quantity) > 1) {
                console.log("You just bought " + quantity + " " + name + "s for $" + (price.toFixed(2) * quantity))
            }
            else {
                console.log("You just bought a " + name + " for $" + price.toFixed(2))
            }
        } else {
            console.log("Insufficient quantity! Try again")
            displayProducts()
        }

        var newQuantity = stock_quantity - quantity
        
       
        if (newQuantity > 0) {
        var query = connection.query(
                
         "UPDATE products SET ? WHERE ?",
         [
            {
                stock_quantity: stock_quantity - quantity
            },
            {
                product_name: name
            }
            
         ]   
        )
        
        console.log("Updating " + name + "... New quantity: " + newQuantity)
    }
    })  
    
}


