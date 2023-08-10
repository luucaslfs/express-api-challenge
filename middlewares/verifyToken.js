const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied. Token missing." });
  }

  try {
    const secret = process.env.SECRET;
    const decodedToken = jwt.verify(token, secret);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};
