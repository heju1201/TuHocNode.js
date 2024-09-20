const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDservices");
const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};
const getAbc = (req, res) => {
  res.send("check abc!");
};
const getHeju = (req, res) => {
  res.render("sample.ejs");
};
const getCreateUsers = (req, res) => {
  res.render("create.ejs");
};
const postCreateUser = async (req, res) => {
  console.log(req.body);
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  // console.log(email, name, city);

  let [results, fields] = await connection.query(
    `insert into Users (email,name,city) values(?,?,?)`,
    [email, name, city]
  );
  console.log(results);
  res.send("Create user succeed !");

  // const [results, fields] = await connection.query("select * from Users u");
  // console.log(results);
};
module.exports = {
  getHomePage,
  getAbc,
  getHeju,
  postCreateUser,
  getCreateUsers,
};
