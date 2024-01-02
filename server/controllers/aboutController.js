import asyncHandler from "../middleware/asyncHandler.js";
import About from "../models/aboutModel.js";

// @desc 		Fetch all abouts
// @route		GET /api/abouts
// @access	Public
const getAbouts = asyncHandler(async (req, res) => {
	try {
		const abouts = await About.find({});
		res.json(abouts);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// @desc 		Add category to about
// @route		POST /api/abouts/add-category/:id
// @access	Private/Admin
const addCategoryToAbout = asyncHandler(async (req, res) => {
	const { category, content } = req.body;
	const about = await About.findById(req.params.id);

	const existingCategory = about.categories.find(
		(cat) => cat.category === category
	);

	if (existingCategory) {
		existingCategory.content = content;
	} else {
		about.categories.push({ category, content });
	}

	const updatedAbout = await about.save();

	res.status(201).json(updatedAbout);
});

// @desc 		Add image to about
// @route		POST /api/abouts/add-image/:id
// @access	Private/Admin
const addImageToAbout = asyncHandler(async (req, res) => {
	const { image, caption } = req.body;
	const about = await About.findById(req.params.id);

	about.images.push({ image, caption });

	const updatedAbout = await about.save();

	res.status(201).json(updatedAbout);
});

// @desc 		Remove image from about
// @route		DELETE /api/abouts/:id/remove-image/:imageId
// @access	Private/Admin
const removeImageFromAbout = asyncHandler(async (req, res) => {
	const about = await About.findById(req.params.id);

	about.images = about.images.filter(
		(image) => image._id.toString() !== req.params.imageId
	);

	const updatedAbout = await about.save();

	res.status(201).json(updatedAbout);
});

// @desc 		Remove category from about
// @route		DELETE /api/abouts/:id/remove-category/:categoryId
// @access	Private/Admin
const removeCategoryFromAbout = asyncHandler(async (req, res) => {
	const about = await About.findById(req.params.id);

	about.categories = about.categories.filter(
		(cat) => cat._id.toString() !== req.params.categoryId
	);

	const updatedAbout = await about.save();

	res.status(201).json(updatedAbout);
});

export {
	getAbouts,
	addCategoryToAbout,
	addImageToAbout,
	removeImageFromAbout,
	removeCategoryFromAbout,
};
