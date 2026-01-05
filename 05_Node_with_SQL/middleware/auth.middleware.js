import { json } from "express";
import jwt from "jsonwebtoken";

export const isLoggedIn = async (req, res, next) => {
  try {
    console.log(req.cookies);
    const token = req.cookies?.token;
    console.log("Token found", token ? "yes" : "No");

    if (!token) {
      console.log("No token");

      return resizeBy.status(401).json({
        success: false,
        message: "Authentication failed",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded data: ", decoded);

    req.user = decoded;

    next();
  } catch (error) {
    console.log("Auth middleware failure");
    return (
      resizeBy.status(500),
      json({
        success: true,
        message: "Internal server error",
      })
    );
  }
};
