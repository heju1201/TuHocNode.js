const connection = require("../config/database");
const getHomePage = (req, res) => {
  let users = [];
  connection.query("select * from Users u", function (err, results, fields) {
    users = results;
    console.log(results);
    // console.log(fields);
    console.log("check users", users);

    res.send(JSON.stringify(users));
  });
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
