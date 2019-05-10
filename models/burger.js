var orm = require("../config/orm");

var burgers = {
  all: function(callback) {
    orm.selectALL("*", "burgers", function(result) {
      callback(result);
    });
  },
  insert: function(set, callback) {
    orm.insertOne("burgers", set, function(result) {
      callback(result);
    });
  },
  update: function(set, where, callback) {
    orm.updateOne("burgers", set, where, function(result) {
      callback(result);
    });
  }
};

module.exports = burgers;
