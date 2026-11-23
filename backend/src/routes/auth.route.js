import express from "express";
import * as authController from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

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

/**
 * @name logoutUserRoute
 * @description Route to logout a user by clearing the authentication token
 * @route POST /api/v1/auth/logout
 * @access Public
 */
router.get("/logout", authController.logoutUserController);

/**
 * @name getMeRoute
 * @description Route to get the authenticated user's profile
 * @route GET /api/v1/auth/getme
 * @access Private
 */
router.get("/getme", authMiddleware, authController.getMeController);

export default router;
