const express = require("express");
const urlRoutes = require("./routes/url");
const { connectToMongo } = require("./connect");

const app = express();
const PORT = 8001;
connectToMongo(
  "mongodb://127.0.0.1:27017/shortener-url"
)
  .then(() => console.log("Connected to MongoDb"))
  .catch(err => {
    console.log(err);
  });

app.use(express.json())
app.use("/url", urlRoutes);
app.use("/", urlRoutes);

app.listen(PORT, () => console.log(`Server running at PORT:${PORT}`));
