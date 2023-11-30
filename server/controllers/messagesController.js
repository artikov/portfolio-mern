import asyncHandler from "../middleware/asyncHandler.js";
import Message from "../models/messageModel.js";

// @desc 		Fetch all messages
// @route		GET /api/messages
// @access	Public
const getMessages = asyncHandler(async (req, res) => {
	try {
		const messages = await Message.find({});
		res.json(messages);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// @desc 		Create a message
// @route		POST /api/messages
// @access	Public
const createMessage = asyncHandler(async (req, res) => {
	try {
		const { name, email, message } = req.body;

		const newMessage = new Message({ name, email, message });

		const createdMessage = await newMessage.save();

		res.status(201).json(createdMessage);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

export { getMessages, createMessage };
