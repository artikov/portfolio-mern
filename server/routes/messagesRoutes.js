import express from "express";
import {
	getMessages,
	createMessage,
	deleteMessage,
} from "../controllers/messagesController.js";

const router = express.Router();

router.route("/").get(getMessages).post(createMessage);
router.route("/:id").delete(deleteMessage);

export default router;
