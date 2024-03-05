const express = require("express");
const URL = require("../models/url");
const { restrictTo } = require("../middlewares/auth");

const router = express.Router();

router.get("/", restrictTo(['NORMAL', 'ADMIN']), async (req, res) => {
  const URLs = await URL.find({createdBy: req.user._id})
  res.render("home", { URLs });
});

router.get("/admin/urls", restrictTo(["ADMIN"]), async (req, res) => {
  const URLs = await URL.find({ });
  res.render("home", { URLs });
});

router.get("/signup", (req, res) => {
  res.render("signUp");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
