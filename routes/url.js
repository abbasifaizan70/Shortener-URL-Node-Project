const express = require('express');
const {
  handleGenerateShortURL,
  handleReturnOriginalURL,
  handleGetAnalytics,
  handleGetAllURL
} = require("../controllers/url");

const routes = express.Router();

routes.get("/", handleGetAllURL);
routes.post("/", handleGenerateShortURL);
routes.get("/analytics/:shortId", handleGetAnalytics);
routes.get("/:shortId", handleReturnOriginalURL);

module.exports = routes;
