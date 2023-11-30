import asyncHandler from "../middleware/asyncHandler.js";
import Contacts from "../models/contactsModel.js";

// @desc 		Fetch all contacts
// @route		GET /api/contacts
// @access	Public
const getContacts = asyncHandler(async (req, res) => {
	try {
		const contacts = await Contacts.find({});
		res.json(contacts);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

export { getContacts };
