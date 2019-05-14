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
  burgers.insert(setVar);
  res.redirect("/");
});

router.put("/", function(req, res) {
  var update = req.body;
  var set = {
    devoured: true
  };

  burgers.update(set, update);
  res.redirect("/");
});

module.exports = router;
