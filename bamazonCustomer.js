/*
the brain of the database
*/
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: " ",
  database: "bamazon_DB"
})

//----------------------------------------------------------------------------------------------------------

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  console.log("connection successful!");
  // run the start function after the connection is made to prompt the use
  makeTable(); //collects data from database to be printed onto screen
})

var makeTable = function () {
  connection.query("SELECT * FROM products", function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + "||" + res[i].product_name + "||" +
        res[i].dept_name + "||" + res[i].price + "||" + res[i].stock_quantity + "\n");
    }
    promptCustomer(res);
  })
}
var promptCustomer = function (res) { //take in reponse option
    inquirer.prompt([{
        type: "input",
        name: "choice",
        message: "What would you like to buy? [Quit with Q]"
      }]).then(function(answer){
          var correct = false;
if(answer.choice.toUpperCase()=="Q"){
  process.exit();
}
          for (var i = 0; i < res.length; i++) {
            if (res[i].product_name == answer.choice) {
              correct = true;
              var product = answer.choice;
              var id = i;
              inquier.prompt({
                type: "input",
                name: "quant",
                message: "How many would you like to buy?",
                validate: function (value) {
                  if (isNaN(value) == false) {
                    return true;
                  } else {
                    return false;
                  }
                }
              }).then(function (answer) {
                  if ((res[id].stock_quantity - answer.quant) > 0) {
                    connection.query("UPDATE products SET stock_quantity=' " + (res[id].stock_quantity - answer.quant) + " ' WHERE product_name= '" + product + " ' ", function (err, res2) {
                      console.log("Product bought!");
                      makeTable();
                    })
                  }else{
                    console.log("Not a valid selection!");
                    promptCustomer(res);
                  }
                })
              }
          }
          if(i==res.length && correct==false){
            console.log("Not a valid selection!");
            promptCustomer(res);
          }
        })
      } 