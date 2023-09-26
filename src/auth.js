const { TOKEN } = require("./config");

exports.isAuthenticatedUser = (req, res, next) => {
  const { token } = req.body;

  if (!token || token !== TOKEN) {
    res.status(403).json({
      message: "Invalid token",
      success: false,
    });

    next(new Error("Invalid Token"));
  }

  next();
};
