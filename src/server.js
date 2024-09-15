const express = require("express");
const path = require("path");
require("dotenv").config();
const configViewEngin = require("./config/viewsEngine");
const webRouter = require("./routes/web");
// console.log("check env : ", process.env);

const app = express(); // app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;

// khai báo router
app.use("/", webRouter);
//config template engine
configViewEngin(app);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
