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
const postCreateUser = (req, res) => {
  console.log(req.body);
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  console.log(email, name, city);

  connection.query(
    `insert into Users (email,name,city) values(?,?,?)`,
    [email, name, city],
    function (err, results) {
      res.send("Create user succeed !");
    }
  );
};
module.exports = {
  getHomePage,
  getAbc,
  getHeju,
  postCreateUser,
};
