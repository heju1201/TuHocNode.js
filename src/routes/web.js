const express = require("express");
const {
  getHomePage,
  getAbc,
  getHeju,
  postCreateUser,
  getCreateUsers,
  getUpdateUser,
  postUpdateUser,
  postDeleteUser,
  getDeleteUser,
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
router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user", getDeleteUser);

module.exports = router; // export default
