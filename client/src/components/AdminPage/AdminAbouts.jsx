import { useState } from "react";

import AdminAbout from "./AdminAbout";
import Spinner from "../Spinner";

import { useFetchAboutsQuery } from "../../services/aboutsApiSlice";

const AdminAbouts = () => {
	const [category, setCategory] = useState("Personal-Info");

	const [formData, setFormData] = useState({
		category: "",
		title: "",
		content: "",
	});

	const [certificateFormData, setCertificateFormData] = useState({
		category: "",
		certificateCaption: "",
	});

	const { data: abouts, isLoading, error, refetch } = useFetchAboutsQuery();

	const about = abouts?.find((about) => about?.title === category);

	const { title, content } = formData;
	const { certificateCaption } = certificateFormData;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value, category: category });
	};

	const handleCategoryChange = (e) => {
		setCategory(e.target.value);
		console.log(category);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	const handleCertificateChange = (e) => {
		const { name, value } = e.target;
		setCertificateFormData({
			...certificateFormData,
			[name]: value,
			category: category,
		});
	};

	const handleCertificateSubmit = (e) => {
		e.preventDefault();
		console.log(certificateFormData);
	};

	if (error) console.log(error);

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-2 mx-auto items-center">
				<label htmlFor="category">Category:</label>
				<select
					id="category"
					name="category"
					className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700"
					value={category}
					onChange={handleCategoryChange}
				>
					<option value="Personal-Info">Personal Info</option>
					<option value="Professional-Info">Professional Info</option>
					<option value="Hobbies">Hobbies</option>
				</select>
			</div>

			<div className="flex flex-col gap-2 justify-around mx-2 lg:mx-10 ">
				<form
					className="border border-slate-800 rounded-md p-8 gap-4 flex flex-col"
					onSubmit={handleSubmit}
				>
					<div className="flex flex-col">
						<label htmlFor="title">Title:</label>
						<input
							type="text"
							id="title"
							name="title"
							value={title}
							onChange={handleChange}
							className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="content">Content:</label>
						<textarea
							id="content"
							name="content"
							value={content}
							onChange={handleChange}
							className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700 h-56"
						></textarea>
					</div>
					<button
						type="submit"
						className="p-2 mt-6 bg-slate-800 text-white text-sm rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out"
					>
						Submit
					</button>
				</form>

				<form
					className="border border-slate-800 rounded-md p-8 gap-4 flex flex-col"
					onSubmit={handleCertificateSubmit}
				>
					<div className="flex flex-col">
						<label
							htmlFor="file"
							className="p-2 mt-6 text-center bg-slate-800 text-white text-sm rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out cursor-pointer "
						>
							Upload Certificate Image
						</label>
						<input type="file" name="file" id="file" className="hidden" />
					</div>

					<div className="flex flex-col gap-2">
						<label htmlFor="">Certificate caption: </label>
						<textarea
							id="certificateCaption"
							name="certificateCaption"
							value={certificateCaption}
							onChange={handleCertificateChange}
							className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700 h-60"
						></textarea>
					</div>

					<button
						type="submit"
						className="p-2 mt-6 bg-slate-800 text-white text-sm rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out"
					>
						Submit
					</button>
				</form>
			</div>
			<hr className="border-slate-800 my-2" />
			<div className="flex flex-wrap justify-between gap-4">
				{isLoading ? (
					<Spinner />
				) : (
					<AdminAbout about={about} refetch={refetch} />
				)}
			</div>
		</div>
	);
};

export default AdminAbouts;
