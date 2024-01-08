import express from "express";
import {
	getProjects,
	postProject,
	deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

router.route("/").get(getProjects).post(postProject);
router.route("/:id").delete(deleteProject);

export default router;
