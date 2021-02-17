var express = require("express");
var path = require("path");

// Tells node that we are creating an "express server"
var app = express();

// Sets up initial port
var PORT = process.env.PORT || 8080;


// Allows express to handle data parsing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Points the server to the routes file
require("./routes/html-routes.js")

// Listener to start the server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
