var orm = require("../config/orm");

var burgers = {
  all: function(callback) {
    orm.selectALL("burgers", function(result) {
      callback(result);
    });
  },
  insert: function(set) {
    orm.insertOne("burgers", set);
  },
  update: function(set, where) {
    orm.updateOne("burgers", set, where);
  }
};

module.exports = burgers;
