const express = require('express');
const {
  handleGenerateShortURL,
  handleReturnOriginalURL,
  handleGetAnalytics
} = require("../controllers/url");

const routes = express.Router();

routes.post("/", handleGenerateShortURL);
routes.get("/analytics/:shortId", handleGetAnalytics);
routes.get("/:shortId", handleReturnOriginalURL);

module.exports = routes;
