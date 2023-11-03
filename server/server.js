import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
