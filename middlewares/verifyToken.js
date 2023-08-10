const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Access denied. Token missing." });
  }

  try {
    const decodedToken = jwt.verify(token, "your-secret-key");
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};
