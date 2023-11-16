import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
	{
		name: String,
		detail: String,
		image: String,
		projectLink: String,
		technologies: [String],
		completeDate: Date,
	},
	{ timeStamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
