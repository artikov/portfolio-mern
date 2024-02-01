import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import aboutRoutes from "./routes/aboutRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import contactsRoutes from "./routes/contactsRoutes.js";
import messagesRoutes from "./routes/messagesRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import userRoutes from "./routes/userRoutes.js";

connectDB();

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.use("/api/abouts", aboutRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contacts", contactsRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
