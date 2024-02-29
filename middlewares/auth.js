const { getUser } = require("../service/auth");

const restrictToLoggedInUserOnly = async (req, res, next) => {
  const uuId = req.cookies?.uid;

  if (!uuId) return res.redirect('/login')
  const user = getUser(uuId);
  
  if (!user) return res.redirect('/login')

  req.user = user;
  next()
}

const checkAuth = async (req, res, next) => {
  const uuId = req.cookies?.uid;
  const user = getUser(uuId);
  req.user = user;
  next()
}

module.exports = { restrictToLoggedInUserOnly, checkAuth };