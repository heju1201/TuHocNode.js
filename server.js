const express = require("express");
const app = express(); // app express
const port = 8081; //port

// khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.send("check abc!");
});
app.get("/h1", (req, res) => {
  res.send("<h1> check dung h1 </h1>");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
