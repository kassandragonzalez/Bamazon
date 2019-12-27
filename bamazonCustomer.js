var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "#Tortas77!",
    database: "Bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
    listProducts();
});

function listProducts(){
    console.log("Listing all items...\n");
    connection.query("SELECT * FROM products" , function(err, res){
        if (err) throw err; 

        var table = new Table({
            head: ["Item ID", "Product Name", "Department Name", "Price", "Stock Quality"]
            , colWidths: [10 , 20]
        });

        for (var i = 0; i < res.length; i++){
            table.push(res[i]"Item ID", 
            )
        }
       
    });
}
