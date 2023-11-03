import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
	{
		name: String,
		detail: String,
		image: String,
		givenDate: Date,
	},
	{ timeStamps: true }
);

const Certificate = mongoose.model("Certificate", certificateSchema);

export default Certificate;
