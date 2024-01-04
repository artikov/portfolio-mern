import path from "path";
import express from "express";
import multer from "multer";

const router = express.Router();

// Create a storage object with a given configuration
const storage = multer.diskStorage({
	destination(req, file, cb) {
		// cb = callback
		cb(null, "uploads/");
	},
	filename(req, file, cb) {
		cb(
			null,
			`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
		);
	},
});

function fileFilter(req, file, cb) {
	const filetypes = /jpe?g|webp|png/;
	const mimetypes = /image\/jpe?g|image\/webp|image\/png/;

	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	const mimetype = mimetypes.test(file.mimetype);

	if (extname && mimetype) {
		cb(null, true);
	} else {
		cb(new Error("Images only!"), false);
	}
}

const upload = multer({ storage, fileFilter });

// @desc    Upload image
// @route   POST /api/upload
// @access  Private
router.post("/", upload.single("image"), async (req, res) => {
	try {
		const imagePath = `uploads/${req.file.filename}`.replace(/\\/g, "/");

		res.status(200).send({
			image: imagePath,
			message: "Image uploaded successfully!",
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

export default router;
