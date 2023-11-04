import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import aboutRoutes from "./routes/aboutRoutes.js";

connectDB();

const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.use("/api/abouts", aboutRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
