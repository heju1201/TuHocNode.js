const express = require("express");
const path = require("path");
require("dotenv").config();
const configViewEngin = require("./config/viewsEngine");
const webRouter = require("./routes/web");
const connection = require("./config/database");

// console.log("check env : ", process.env);

const app = express(); // app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngin(app);

// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

// khai báo router
app.use("/", webRouter);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
