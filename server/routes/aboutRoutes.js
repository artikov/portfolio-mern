import express from "express";
import {
	getAbouts,
	addCategoryToAbout,
	addImageToAbout,
} from "../controllers/aboutController.js";

const router = express.Router();

router.route("/").get(getAbouts);
router.route("/add-category/:id").patch(addCategoryToAbout);
router.route("/add-image/:id").patch(addImageToAbout);

export default router;
