var connection = require("./connection");

var orm = {
  selectALL: function(table, callback) {
    var queryString = "SELECT * FROM" + table + ";";
    connection.query(queryString, table, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  insertOne: function(column, value) {
    var queryString = "INSERT into ?? SET ?";
    connection.query(queryString, [column, value], function(err) {
      if (err) throw err;
    });
  },

  updateOne: function(table, set, where) {
    var queryString = "UPDATE ?? SET ? WHERE ?";
    connection.query(queryString, [table, set, where], function(err) {
      if (err) throw err;
    });
  }
};

module.exports = orm;
