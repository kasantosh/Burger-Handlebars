var mysql = require("mysql");

var connection = mysql.createConnection(function() {
  host: "localhost";
  port: "PORT";
  user: "root";
  password: "mysqlpass123456";
  database: burgers_db;
});
