import express from "express";
import {
	registerUser,
	authenticateUser,
	logoutUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authenticateUser);
router.route("/logout").post(logoutUser);

export default router;
