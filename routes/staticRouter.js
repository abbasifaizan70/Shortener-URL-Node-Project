const express = require("express");
const URL = require("../models/url");

const router = express.Router();

router.get("/", async (req, res) => {
  const URLs = await URL.find({})
  res.render("home", { URLs });
});

module.exports = router;
