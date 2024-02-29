const express = require("express");
const { handleSignUp, handleSignIn } = require("../controllers/user");

const router = express.Router();

router.post("/", handleSignUp);
router.post("/login", handleSignIn);

module.exports = router;
