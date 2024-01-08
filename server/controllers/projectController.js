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

// @desc 		Post a project
// @route		POST /api/projects
// @access	Private/Admin
const postProject = asyncHandler(async (req, res) => {
	const { name, detail, image, projectLink, technologies, completeDate } =
		req.body;

	const project = new Project({
		name,
		detail,
		image,
		projectLink,
		technologies,
		completeDate,
	});

	const createdProject = await project.save();
	res.status(201).json(createdProject);
});

// @desc 		Delete a project
// @route		DELETE /api/projects/:id
// @access	Private/Admin
const deleteProject = asyncHandler(async (req, res) => {
	try {
		const project = await Project.findById(req.params.id);

		if (project) {
			await project.deleteOne();
			res.json({ message: "Message removed" });
		} else {
			res.status(404).json({ message: "Message not found" });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

export { getProjects, postProject, deleteProject };
