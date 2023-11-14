import mongoose from "mongoose";

// Define the schema for the "About" data
const aboutSchema = new mongoose.Schema({
	title: String,
	categories: [
		{
			category: String,
			content: String,
		},
	],
	images: [
		{
			image: String,
			caption: String,
		},
	],
});

// Create the Mongoose model
const About = mongoose.model("About", aboutSchema);

export default About;
