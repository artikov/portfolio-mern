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

// @desc 		Add contact details
// @route		POST /api/contacts
// @access	Private
const addContacts = asyncHandler(async (req, res) => {
	try {
		const { email, phone, links } = req.body;

		const contact = new Contacts({
			email,
			phone,
			otherLinks: links,
		});

		const createdContact = await contact.save();

		res.status(201).json(createdContact);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// @desc 		Update contact details
// @route		PUT /api/contacts/:id
// @access	Private
const updateContacts = asyncHandler(async (req, res) => {
	try {
		const { email, phone, links } = req.body;

		const contact = await Contacts.findById(req.params.id);

		if (contact) {
			contact.email = email || contact.email;
			contact.phone = phone || contact.phone;
			contact.otherLinks = links || contact.otherLinks;

			const updatedContact = await contact.save();

			res.json(updatedContact);
		} else {
			res.status(404);
			throw new Error("Contact not found");
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

export { getContacts, updateContacts, addContacts };
