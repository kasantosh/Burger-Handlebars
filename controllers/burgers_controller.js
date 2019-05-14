var express = require("express");
var router = express.Router();
var burgers = require("../models/burger");

router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  var setVar = req.body;
  var data = {
    ordered: [],
    devoured: []
  };
  burgers.insert(setVar);
  burgers.all(function(result) {
    for (var i = 0; i < result.length; i++) {
      if (!result[i].devoured) {
        data.ordered.push(result[i]);
      } else {
        data.devoured.push(result[i]);
      }
    }
    res.render("index", data);
  });
});

router.put("/", function(req, res) {
  var update = req.body;
  var data = {
    ordered: [],
    devoured: []
  };
  burgers.update(update.set, update.where);
  burgers.all(function(result) {
    for (var i = 0; i < result.length; i++) {
      if (!result[i].devoured) {
        data.ordered.push(result[i]);
      } else {
        data.devoured.push(result[i]);
      }
    }
    res.render("index", data);
  });
});

module.exports = router;
