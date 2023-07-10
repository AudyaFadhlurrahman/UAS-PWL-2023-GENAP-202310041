const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

// Endpoint untuk registrasi
router.post("/register", register);

router.post("/signin", login);

module.exports = router;
