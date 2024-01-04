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
	};

	const handleImageUrl = (e) => {
		setImageUrl(e.target.value);
	};

	const handleCertificateSubmit = async (e) => {
		e.preventDefault();

		try {
			if (image) {
				const formData = new FormData();
				formData.append("image", image);

				const res = await uploadImage(formData).unwrap();
				const imageUrl = res.image;

				const newImage = {
					aboutId,
					image: imageUrl,
					caption,
				};

				await addImage(newImage).unwrap();
				setCaption("");
				setImage(null);
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

				<input
					type="text"
					placeholder="Enter image url"
					id="imageUrl"
					className="p-2 mt-6 text-center bg-slate-800 text-white text-sm rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out cursor-pointer "
					value={imageUrl}
					onChange={handleImageUrl}
				/>

				<input
					type="file"
					id="image"
					label="Choose File"
					className="p-2 mt-6 text-center bg-slate-800 text-white text-sm rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out cursor-pointer "
					onChange={handleUploadImage}
				/>
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
