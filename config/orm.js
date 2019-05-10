var connection = require("./connection");

var orm = {
  selectALL: function(column, table, callback) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [column, table], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  insertOne: function(column, value, callback) {
    var queryString = "INSERT into ?? SET ?";
    connection.query(queryString, [column, value], function(err, result) {
      if (err) throw err;

      var result = "Inserted to database";

      callback(result);
    });
  },

  updateOne: function(table, set, where, callback) {
    var queyrString = "UPDATE ?? SET ? WHERE ?";
    connection.query(queryString, [table, set, where], function(err, result) {
      if (err) throw err;

      var result = "updated database";

      callback(result);
    });
  }
};

module.exports = orm;
