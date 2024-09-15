const express = require("express");
const path = require("path");
require("dotenv").config();

// console.log("check env : ", process.env);

const app = express(); // app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// config static files
app.use(express.static(path.join(__dirname, "public")));

// khai báo route
app.get("/", (req, res) => {
  res.send("Hello World! and nodemon");
});

app.get("/abc", (req, res) => {
  res.send("check abc!");
});
app.get("/heju", (req, res) => {
  // res.send("<h1> check dung h1 </h1>");
  res.render("sample.ejs");
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
