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
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		generateToken(res, user._id);
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		});
	} else {
		res.status(401);
		throw new Error("Invalid email or password");
	}
});

// @desc   Logout user / clear cookie
// @route  POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
	res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
	res.status(200).json({ message: "Logged out" });
});

export { registerUser, authenticateUser, logoutUser };
