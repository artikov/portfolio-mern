import asyncHandler from "../middleware/asyncHandler.js";
import Project from "../models/projectModel.js";

// @desc 		Fetch all projects
// @route		GET /api/projects
// @access	Public
const getProjects = asyncHandler(async (req, res) => {
	try {
		const projects = await Project.find({});
		res.json(projects);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

export { getProjects };
