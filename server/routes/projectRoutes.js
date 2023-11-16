import express from "express";
import { getProjects } from "../controllers/projectController.js";

const router = express.Router();

router.route("/").get(getProjects);

export default router;
