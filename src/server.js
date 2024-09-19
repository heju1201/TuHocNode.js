const express = require("express");
const path = require("path");
require("dotenv").config();
const configViewEngin = require("./config/viewsEngine");
const webRouter = require("./routes/web");
const mysql = require("mysql2");
// console.log("check env : ", process.env);

const app = express(); // app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;

// khai báo router
app.use("/", webRouter);
//config template engine
configViewEngin(app);

//test connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "hoidanit",
});

// simple query
// 'select * from `table` where `name` = "Page" AND `age` > 45',
connection.query("select * from Users u", function (err, results, fields) {
  console.log(results);
  console.log(fields);
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
