const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token1;

    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      }

      req.userId = decoded.id;
      next();
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { verifyToken };
