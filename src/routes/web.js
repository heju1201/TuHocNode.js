const express = require("express");
const {
  getHomePage,
  getAbc,
  getHeju,
  postCreateUser,
  getCreateUsers,
  getUpdateUser,
  postUpdateUser,
} = require("../controllers/HomeController");
const router = express.Router();
// khai báo route
router.get("/", getHomePage);

router.get("/abc", getAbc);
router.get("/heju", getHeju);
router.get("/create", getCreateUsers);
router.get("/update/:id", getUpdateUser);
router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);

module.exports = router; // export default
