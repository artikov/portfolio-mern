import { useState } from "react";

import {
	useCreateProjectMutation,
	useUploadImageMutation,
} from "../../services/projectsApiSlice";

import Spinner from "../Spinner";

const AdminProjectsForm = () => {
	const [projectFormData, setProjectFormData] = useState({
		name: "",
		detail: "",
		projectLink: "",
		completeDate: "",
	});
	const [technologies, setTechnologies] = useState([]);
	const [image, setImage] = useState(null);
	const [imageUrl, setImageUrl] = useState("");

	const [createProject, { isLoading }] = useCreateProjectMutation();
	const [uploadImage, { isLoading: isUploading }] = useUploadImageMutation();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setProjectFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleTechnologiesChange = (e) => {
		const { value } = e.target;
		let selectedTechnologies = value.split(",");
		setTechnologies(selectedTechnologies);
	};

	const handleImageUrl = (e) => {
		setImageUrl(e.target.value);
	};

	const handleUploadImage = (e) => {
		setImage(e.target.files[0]);
		setImageUrl(e.target.files[0].name);
	};

	const clearForm = () => {
		setProjectFormData({
			name: "",
			detail: "",
			projectLink: "",
			completeDate: "",
		});
		setTechnologies([]);
		setImage(null);
		setImageUrl("");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const technologiesSubmit = technologies.map((tech) => tech.trim());

		try {
			if (image && imageUrl === image.name) {
				const formData = new FormData();
				formData.append("image", image);

				const res = await uploadImage(formData).unwrap();
				const uploadedUrl = res.image;

				const newProject = {
					...projectFormData,
					technologies: technologiesSubmit,
					image: uploadedUrl,
				};

				await createProject(newProject).unwrap();
				clearForm();
			} else if (imageUrl) {
				const newProject = {
					...projectFormData,
					technologies: technologiesSubmit,
					image: imageUrl,
				};

				await createProject(newProject).unwrap();
				clearForm();
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form
			className="flex flex-col gap-4  mx-auto border border-slate-800 rounded-md p-8"
			onSubmit={handleSubmit}
		>
			<div className="flex justify-between items-center">
				<label htmlFor="name" className="">
					Name:
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={projectFormData.name}
					onChange={handleChange}
					className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700 w-1/2"
				/>
			</div>
			<div className="flex justify-between items-center">
				<label htmlFor="detail">Details:</label>
				<textarea
					id="detail"
					name="detail"
					value={projectFormData.detail}
					onChange={handleChange}
					className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700 w-1/2"
				></textarea>
			</div>
			<div className="flex justify-between items-center">
				<label htmlFor="projectLink">Project Link:</label>
				<input
					type="text"
					id="projectLink"
					name="projectLink"
					value={projectFormData.projectLink}
					onChange={handleChange}
					className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700 w-1/2"
				/>
			</div>
			<div className="flex justify-between items-center">
				<label htmlFor="technologies">Technologies:</label>
				<input
					id="technologies"
					name="technologies"
					value={technologies.join(",")}
					onChange={handleTechnologiesChange}
					className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700 w-1/2"
				/>
			</div>
			<div className="flex justify-between items-center">
				<label htmlFor="completeDate">Complete Date:</label>
				<input
					type="date"
					id="completeDate"
					name="completeDate"
					value={projectFormData.completeDate}
					onChange={handleChange}
					className="bg-slate-950 border border-slate-800 rounded-md p-1 w-1/2
						focus:outline-none focus:ring-1 focus:ring-slate-700"
				/>
			</div>
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
						{isUploading ? "Uploading..." : "Choose File"}
					</label>
				</div>
			</div>

			<button
				type="submit"
				className="p-2 bg-slate-800 text-white text-sm rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out"
			>
				{isLoading ? <Spinner /> : "Submit"}
			</button>
		</form>
	);
};

export default AdminProjectsForm;
