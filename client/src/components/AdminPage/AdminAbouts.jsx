import { useState } from "react";

const AdminAbouts = () => {
	const [category, setCategory] = useState("personal");
	const [formData, setFormData] = useState({
		category: "",
		title: "",
		content: "",
	});

	const [certificateFormData, setCertificateFormData] = useState({
		category: "",
		certificateCaption: "",
	});

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

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-2 mx-auto">
				<label htmlFor="category">Category:</label>
				<select
					id="category"
					name="category"
					className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700"
					value={category}
					onChange={handleCategoryChange}
				>
					<option value="personal">Personal Info</option>
					<option value="professional">Professional Info</option>
					<option value="hobbies">Hobbies</option>
				</select>
			</div>

			<div className="flex justify-around">
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
					<div className="w-full">
						<input type="file" name="file" id="file" className="hidden" />
						<label
							htmlFor="file"
							className="p-2 mt-6 px-20 bg-slate-800 text-white text-sm rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out cursor-pointer"
						>
							Upload Image
						</label>
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
		</div>
	);
};

export default AdminAbouts;
