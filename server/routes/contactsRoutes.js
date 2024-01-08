import express from "express";
import {
	getContacts,
	updateContacts,
} from "../controllers/contactsController.js";

const router = express.Router();

router.route("/").get(getContacts);
router.route("/:id").put(updateContacts);

export default router;
