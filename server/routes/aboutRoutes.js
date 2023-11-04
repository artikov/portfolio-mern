import express from "express";
import { getAbouts } from "../controllers/aboutController.js";

const router = express.Router();

router.route("/").get(getAbouts);

export default router;
