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

export { getAbouts };
