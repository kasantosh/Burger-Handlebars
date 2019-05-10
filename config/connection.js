var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "mysqlpass123456",
  database: "burgers_db"
});

connection.connect(function() {
  if (error) throw error;

  console.log("Connected to database ...");
});

module.exports = connection;
