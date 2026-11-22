import express from "express";
import authController from "../controllers/auth.controller.js";

const router = express.Router();

/**
 * @name registerUserRoute
 * @description Route to register a new user
 * @route POST /api/v1/auth/register
 * @access Public
 */
router.post("/register", authController.registerUserController);

/**
 * @name loginUserRoute
 * @description Route to login a user
 * @route POST /api/v1/auth/login
 * @access Public
 */
router.post("/login", authController.loginUserController);

export default router;
