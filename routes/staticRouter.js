const express = require("express");
const URL = require("../models/url");

const router = express.Router();

router.get("/", async (req, res) => {
  if(!req.user) return res.redirect('/login')
  const URLs = await URL.find({createdBy: req.user._id})
  res.render("home", { URLs });
});

router.get("/signup", (req, res) => {
  res.render("signUp");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
