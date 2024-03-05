const express = require("express");
const { connectToMongo } = require("./connect");
const path = require("path");
const cookieParser = require('cookie-parser')

const urlRoutes = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");
const { restrictTo, checkForAuthentication } = require("./middlewares/auth");

const app = express();
const PORT = 8001;
connectToMongo("mongodb://127.0.0.1:27017/shortener-url")
  .then(() => console.log("Connected to MongoDb"))
  .catch(err => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);

app.use("/url", restrictTo(['NORMAL']), urlRoutes);
app.use("/", staticRoute);
app.use("/user", userRoute);

app.listen(PORT, () => console.log(`Server running at PORT:${PORT}`));
