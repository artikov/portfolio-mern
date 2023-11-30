import mongoose from "mongoose";

// Define the schema for the "Contacts" data
const contactsSchema = new mongoose.Schema({
	email: String,
	phone: String,
	otherLinks: [],
});

const Contacts = mongoose.model("Contacts", contactsSchema);

export default Contacts;
