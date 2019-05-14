var express = require("express");
var path = require("path");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/")));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require("./controller/burgers_controller");

app.use(router);

app.listen(PORT, function() {
  console.log(`Listening on PORT ${PORT}`);
});
