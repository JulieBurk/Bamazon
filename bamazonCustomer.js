var mysql = require("mysql");
const prompt = require("prompt");
var inquirer = require("inquirer");
var s_g_id = "1";
var i_g_qty = 0;
var i_g_cost = 0;


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Iheartjadebear14",
    database: "bamazonDB"
});

function connectDB() {
    connection.connect(function (err) {
        if (err) { throw err; }
        console.log("connected as id " + connection.threadId);
        inquireList();
        inquireMain();
    });
}

// inquire user input for card type
function inquireMain() {
    inquirer.prompt([
        {
            type: "list",
            message: "Hello Bamazoner:",
            choices: ["List items","Purchase", "QUIT"],
            name: "command"
        }
    ]).then(function (user) {
        switch (user.command) {
            case "List items":
                console.log(' -list items- ');
                inquireList();
                break;
            case "Purchase":
                console.log(' -Purchase- ');
                inquire_purchase();
                break;
            case "QUIT":
                console.log("Thank you for your business!");
                process.exit(0);
        }
    });
}


function inquire_purchase() {
    inquirer.prompt([// A
        {
            type: "input",
            message: "item number",
            name: "id"
        },
        ])
        .then(function (user) { // B
            //console.log(user.id);
            s_g_id = user.id;
             //console.log("s_g_id: " + s_g_id);
                inquirer.prompt([ //C
                {
                    type: "input",
                    message: "How many",
                    name: "qty"
                },
                ])

                .then(function (user) { // D
                    //console.log(user.qty);
                    do_purchase(user.qty,"cost");
                    inquireMain();
                    } // D
                );  // C
            } // B 
        ); // A
}


function inquireList() {
    var items = [];
    connection.query("SELECT * FROM products",
        function (err, res) {
            console.log("\n-----------------------------------------");
            console.log(" -inventory- ");
            console.log("Product" + "\t" + "Department" + "\t" +"Item Cost" + "\t" +"Available" );
            for (var i = 0; i < res.length; i++) {
                console.log(res[i].product_name + "\t" + res[i].department_name + "\t" + res[i].price_toCustomer + "\t" + res[i].stock_quantity);
                //console.log("\t" );
                //console.log(res[i].product_name );
                items.push(res[i].product_name);
            }
            console.log("-----------------------------------------");
            console.log("\n");
            inquireMain();
        });

}


// UPDATE products SET stock_quantity = 64 WHERE item_id = 1;
function update_qty(){
		var s_temp = i_g_qty.toString();
        connection.query("UPDATE products SET stock_quantity = "+ s_temp + " WHERE item_id = "+ s_g_id ,
         function (err, res) { });
}


function do_purchase(qty,cost){
    //console.log("Entered do_purchase\n");
    var s_temp = "SELECT stock_quantity FROM products WHERE item_id = " + s_g_id;
    var s_count_query = s_temp; //  '\"s_temp\"';
    connection.query(s_count_query,function (err, res) {
            // do somethin
            i_g_qty = res[0].stock_quantity;
            i_g_qty = res[0].stock_quantity;
            if (res[0].stock_quantity >= qty)
            {
                i_g_qty = i_g_qty - qty;
                //console.log("i_g_qty: " + i_g_qty);
            	//console.log("qty: " + qty);
                console.log("-----------------------------------------");
                console.log("Done. Thank you for the order.");
                console.log("-----------------------------------------");
                update_qty();
                inquireMain();
            }
            else
            {
                console.log("-----------------------------------------");
                console.log("Sorry, Can't complete you order. Not enough inventory. You may order " + i_g_qty.toString() +" or fewer.");
                console.log("-----------------------------------------");
                inquireMain();
            }
        }); // end of query
}



connectDB();