import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc 		Register User
// @route		POST /api/users
// @access	Private
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	// Check if user exists
	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new Error("User already exists");
	}

	// Create user
	const user = await User.create({
		name,
		email,
		password,
	});

	if (user) {
		generateToken(res, user._id);
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		});
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
});

// @desc 		Authenticate User
// @route		GET /api/users/login
// @access	Private
const authenticateUser = asyncHandler(async (req, res) => {
	// Your code for user authentication goes here
});

export { registerUser, authenticateUser };
