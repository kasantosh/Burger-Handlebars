var orm = require("../config/orm.js");

var burgers = {
  all: function(cb) {
    orm.selectALL("burgers", function(res) {
      cb(res);
    });
  },
  insert: function(cols, vals) {
    orm.insertOne("burgers", cols, vals);
  },
  update: function(set, condition) {
    orm.updateOne("burgers", set, condition);
  }
};

module.exports = burgers;
