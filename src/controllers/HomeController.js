const getHomePage = (req, res) => {
  res.send("Hello World! and nodemon");
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
