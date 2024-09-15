const express = require("express");
const {
  getHomePage,
  getAbc,
  getHeju,
} = require("../controllers/HomeController");
const router = express.Router();
// khai báo route
router.get("/", getHomePage);

router.get("/abc", getAbc);
router.get("/heju", getHeju);

module.exports = router; // export default
