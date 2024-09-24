const connection = require("../config/database");
const {
  getAllUsers,
  getIdUser,
  updateUser,
} = require("../services/CRUDservices");
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
const getUpdateUser = async (req, res) => {
  const userId = req.params.id;
  let user = await getIdUser(userId);

  res.render("edit.ejs", { user: user });
};
const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  let [results, fields] = await connection.query(
    `insert into Users (email,name,city) values(?,?,?)`,
    [email, name, city]
  );
  console.log(results);
  res.send("Create user succeed !");
};

const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let id = req.body.id;
  await updateUser(email, name, city, id);
  res.redirect("/");
};
const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await getIdUser(userId);
  res.render("delete.ejs", { user: user });
};
const getDeleteUser = async (req, res) => {
  res.send("ok!");
};
module.exports = {
  getHomePage,
  getAbc,
  getHeju,
  postCreateUser,
  getCreateUsers,
  getUpdateUser,
  postUpdateUser,
  postDeleteUser,
  getDeleteUser,
};
