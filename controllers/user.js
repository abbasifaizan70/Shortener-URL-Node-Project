const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const {setUser}= require('../service/auth')

const handleSignUp = async (req, res) => {
  const { name, email, password } = req.body;
  User.create({ name, email, password });
  return res.render("/login");
};

const handleSignIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.render("login", { error: "Invalid Credentials" });
  }
  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uid", sessionId);
  return res.redirect("/");
};

module.exports = { handleSignUp, handleSignIn };
