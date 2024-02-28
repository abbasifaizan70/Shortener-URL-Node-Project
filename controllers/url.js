const nanoid = require("nanoid");
const URL = require("../models/url");

const handleGenerateShortURL = async (req, res) => {
  const redirectUrl = req.body.url;
  if (!redirectUrl) return res.status(400).json({ err: "URL is required" });
  const shortID = nanoid(8);
  await URL.create({
    shortId: shortID,
    redirectURL: redirectUrl,
    visitHistory: []
  });

  return res.status(201).json({ id: shortID });
};

const handleGetAnalytics = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });

  return res.json({
    totalClicks: result.visitHistory.length,
    Analytics: result.visitHistory
  });
}

const handleReturnOriginalURL = async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now()
        }
      }
    }
  );

  res.redirect(entry.redirectURL);
};

module.exports = {
  handleGenerateShortURL,
  handleReturnOriginalURL,
  handleGetAnalytics
};
