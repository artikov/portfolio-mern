import express from "express";
import {
	getContacts,
	addContacts,
	updateContacts,
} from "../controllers/contactsController.js";

const router = express.Router();

router.route("/").get(getContacts).post(addContacts);
router.route("/:id").put(updateContacts);

export default router;
