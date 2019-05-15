var express = require("express");

var path = require("path");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 5000;

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "/")));

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log(`Listening on PORT ${PORT}`);
});
