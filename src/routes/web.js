const express = require("express");
const {
  getHomePage,
  getAbc,
  getHeju,
  postCreateUser,
  getCreateUsers,
  getUpdateUser,
} = require("../controllers/HomeController");
const router = express.Router();
// khai báo route
router.get("/", getHomePage);

router.get("/abc", getAbc);
router.get("/heju", getHeju);
router.get("/create", getCreateUsers);
router.get("/update", getUpdateUser);
router.post("/create-user", postCreateUser);

module.exports = router; // export default
