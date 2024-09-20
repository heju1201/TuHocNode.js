const connection = require("../config/database");
const getAllUsers = async () => {
  let [results, fields] = await connection.query("select * from Users");
  return results;
};
const getIdUser = async (userId) => {
  let [results, fields] = await connection.query(
    "select * from Users where id = ? ",
    [userId]
  );
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};
const updateUser = async (email, name, city, id) => {
  let [results, fields] = await connection.query(
    `update Users set email = ?, name = ?, city = ? where id = ?`,
    [email, name, city, id]
  );
};
module.exports = {
  getAllUsers,
  getIdUser,
  updateUser,
};
