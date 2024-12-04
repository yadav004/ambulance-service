const express = require("express");
const router = express.Router();
const { loginUser, loginDriver } = require("../controllers/authController");

router.post("/user-login", loginUser);
router.post("/driver-login", loginDriver);

module.exports = router;
