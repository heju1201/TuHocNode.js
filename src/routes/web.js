const express = require("express");
const router = express.Router();
// khai báo route
router.get("/", (req, res) => {
  res.send("Hello World! and nodemon");
});

router.get("/abc", (req, res) => {
  res.send("check abc!");
});
router.get("/heju", (req, res) => {
  // res.send("<h1> check dung h1 </h1>");
  res.render("sample.ejs");
});

module.exports = router; // export default
