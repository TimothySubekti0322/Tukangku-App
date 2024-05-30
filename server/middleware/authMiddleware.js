const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET =
  process.env.JWT_SECRET ||
  "d9e8a3432a71314d3c76913847da5287005a9e281d52642f630c28b4cbe093c2";

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ message: "Authorization Header is Missing" });
  try {
    const token = req.header("Authorization").split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });
    const decoded = jwt.verify(token, JWT_SECRET);
    req.email = decoded.email;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = verifyToken;
