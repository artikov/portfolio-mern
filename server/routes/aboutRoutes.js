import express from "express";
import {
	getAbouts,
	addCategoryToAbout,
	addImageToAbout,
	removeImageFromAbout,
	removeCategoryFromAbout,
} from "../controllers/aboutController.js";

const router = express.Router();

router.route("/").get(getAbouts);
router.route("/add-category/:id").patch(addCategoryToAbout);
router.route("/add-image/:id").patch(addImageToAbout);
router.route("/:id/remove-image/:imageId").delete(removeImageFromAbout);
router
	.route("/:id/remove-category/:categoryId")
	.delete(removeCategoryFromAbout);

export default router;
