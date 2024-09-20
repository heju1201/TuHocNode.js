const connection = require("../config/database");
const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const getAbc = (req, res) => {
  res.send("check abc!");
};
const getHeju = (req, res) => {
  // res.send("<h1> check dung h1 </h1>");
  res.render("sample.ejs");
};
module.exports = {
  getHomePage,
  getAbc,
  getHeju,
};
