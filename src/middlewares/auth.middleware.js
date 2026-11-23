import jwt from "jsonwebtoken";

function authMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    return res.staus(401).json({
      message: "Invalid token, please log in again",
    });
  }
}

export { authMiddleware };
