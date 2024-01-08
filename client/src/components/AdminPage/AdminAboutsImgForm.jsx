import { useState } from "react";

import {
	useAddImageMutation,
	useUploadImageMutation,
} from "../../services/aboutsApiSlice";

import PropTypes from "prop-types";

const AdminAboutsImgForm = ({ aboutId }) => {
	const [image, setImage] = useState(null);
	const [imageUrl, setImageUrl] = useState("");
	const [caption, setCaption] = useState("");

	const [addImage, { isLoading }] = useAddImageMutation();
	const [uploadImage] = useUploadImageMutation();

	const handleUploadImage = (e) => {
		setImage(e.target.files[0]);
		setImageUrl(e.target.files[0].name);
	};

	const handleImageUrl = (e) => {
		setImageUrl(e.target.value);
	};

	const handleCertificateSubmit = async (e) => {
		e.preventDefault();

		try {
			if (image && imageUrl === image.name) {
				const formData = new FormData();
				formData.append("image", image);

				const res = await uploadImage(formData).unwrap();
				const uploadedUrl = res.image;

				const newImage = {
					aboutId,
					image: uploadedUrl,
					caption,
				};

				await addImage(newImage).unwrap();
				setCaption("");
				setImage(null);
				setImageUrl("");
			} else if (imageUrl) {
				const newImage = {
					aboutId,
					image: imageUrl,
					caption,
				};

				await addImage(newImage).unwrap();
				setCaption("");
				setImage(null);
				setImageUrl("");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form
			className="border border-slate-800 rounded-md p-8 gap-4 flex flex-col"
			onSubmit={handleCertificateSubmit}
		>
			<div className="flex flex-col">
				<label htmlFor="image" className="">
					Upload Certificate Image
				</label>

				<div className="flex items-center mt-4">
					<input
						type="text"
						placeholder="Enter image url or choose file"
						id="imageUrl"
						className="p-2 flex-1 mr-2 text-center bg-slate-800 text-white text-sm rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out "
						value={imageUrl}
						onChange={handleImageUrl}
					/>

					<label className="p-2 bg-slate-800 text-sm rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out cursor-pointer">
						<input
							type="file"
							id="image"
							style={{ display: "none" }}
							onChange={handleUploadImage}
						/>
						Choose File
					</label>
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<label htmlFor="">Certificate caption: </label>
				<textarea
					id="certificateCaption"
					name="certificateCaption"
					value={caption}
					onChange={(e) => setCaption(e.target.value)}
					className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700 h-60"
				></textarea>
			</div>

			<button
				type="submit"
				className="p-2 mt-6 bg-slate-800 text-white text-sm rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out"
			>
				{isLoading ? "Loading..." : "Submit"}
			</button>
		</form>
	);
};

AdminAboutsImgForm.propTypes = {
	aboutId: PropTypes.string.isRequired,
};

export default AdminAboutsImgForm;
