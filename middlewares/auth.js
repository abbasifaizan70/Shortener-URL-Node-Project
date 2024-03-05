const { getUser } = require("../service/auth");

const checkForAuthentication = (req, res, next) => {
  const tokenCookie = req.cookies?.token;
  req.user = null;
  if (
    !tokenCookie
  ) {
    return next();
  }

  token = tokenCookie
  const user = getUser(token);

  req.user = user;
  return next();
};

const restrictTo = (roles = []) => {
  return (req, res, next) => {
    if (!req.user) return res.redirect("/login");

    if (!roles.includes(req.user.role)) return res.end("Unauthorized");

    next();
  };
};

module.exports = { checkForAuthentication, restrictTo };
