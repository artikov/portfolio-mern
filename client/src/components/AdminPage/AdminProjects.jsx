import { useState } from "react";

import {
	useCreateProjectMutation,
	useUploadImageMutation,
} from "../../services/projectsApiSlice";

import AdminProjectsAll from "./AdminProjectsAll";

const AdminProjects = () => {
	const [formData, setFormData] = useState({
		name: "",
		detail: "",
		projectLink: "",
		completeDate: "",
	});
	const [technologies, setTechnologies] = useState([]);
	const [image, setImage] = useState(null);
	const [imageUrl, setImageUrl] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleTechnologiesChange = (e) => {
		const { value } = e.target;
		let selectedTechnologies = value.split(",");
		setTechnologies(selectedTechnologies);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const technologiesSubmit = technologies.map((tech) => tech.trim());
		// Add logic to handle form submission with formData
		console.log(formData, technologiesSubmit);
	};

	return (
		<div>
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
						value={formData.name}
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
						value={formData.detail}
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
						value={formData.projectLink}
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
						value={formData.completeDate}
						onChange={handleChange}
						className="bg-slate-950 border border-slate-800 rounded-md p-1 w-1/2
						focus:outline-none focus:ring-1 focus:ring-slate-700"
					/>
				</div>
				<div className="flex ">
					<input type="file" name="file" id="file" className="hidden" />
					<label
						htmlFor="file"
						className="p-2 mx-auto text-center w-full bg-slate-800 text-white text-sm rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out cursor-pointer"
					>
						Upload Image
					</label>
				</div>
				<button
					type="submit"
					className="p-2 bg-slate-800 text-white text-sm rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out"
				>
					Submit
				</button>
			</form>
			<hr className="border-slate-800 my-2" />
			<AdminProjectsAll />
		</div>
	);
};

export default AdminProjects;
