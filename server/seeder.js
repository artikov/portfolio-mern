import mongoose from "mongoose";
import dotenv from "dotenv";

// Import the data
// import aboutData from "./data/aboutData.js";
// import users from "./data/users.js";
import projectData from "./data/projectData.js";

// Import the models
// import About from "./models/aboutModel.js";
// import User from "./models/userModel.js";
import Project from "./models/projectModel.js";

// Import the database connection
import connectDB from "./config/db.js";

// Configure dotenv
dotenv.config();

// Connect to the database
connectDB();

// Import the data
const importData = async () => {
	try {
		// Delete all existing data
		// await About.deleteMany();
		// await User.deleteMany();
		await Project.deleteMany();

		// Import the new data
		// await About.insertMany(aboutData);
		// await User.insertMany(users);
		await Project.insertMany(projectData);

		// Log a success message
		console.log("Data Imported!");
		process.exit();
	} catch (error) {
		// Log an error message
		console.error(`${error}`);
		process.exit(1);
	}
};

// Destroy the data
const destroyData = async () => {
	try {
		// Delete all existing data
		await About.deleteMany();
		await User.deleteMany();
		await Project.deleteMany();

		// Log a success message
		console.log("Data Destroyed!");
		process.exit();
	} catch (error) {
		// Log an error message
		console.error(`${error}`);
		process.exit(1);
	}
};

// Check the command line arguments
if (process.argv[2] === "-d") {
	destroyData();
} else {
	importData();
}
