import jwt from "jsonwebtoken";
import BlacklistTokenModel from "../models/blacklist.model.js";

async function authMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  const isTokenBlacklisted = await BlacklistTokenModel.findOne({ token });

  if (isTokenBlacklisted) {
    return res.status(401).json({
      message: "Token has been expired, please log in again",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token, please log in again",
    });
  }
}

export { authMiddleware };
