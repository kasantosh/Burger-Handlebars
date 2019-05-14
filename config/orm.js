var connection = require("../config/connection.js");

var orm = {
  selectALL: function(table, cb) {
    var queryString = "SELECT * FROM  ?? ";
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(table, vals) {
    var queryString = "INSERT INTO ?? SET ?";
    connection.query(queryString, [table, vals], function(err) {
      if (err) throw err;
    });
  },

  updateOne: function(table, set, condition) {
    queryString = "UPDATE ?? SET ? WHERE ?";
    console.log(queryString);
    connection.query(queryString, [table, set, condition], function(err) {
      if (err) throw err;
    });
  }
};

module.exports = orm;
