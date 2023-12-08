import { useState } from "react";

const AdminContacts = () => {
	const [formData, setFormData] = useState({
		email: "",
		phone: "",
		otherLinks: [],
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleOtherLinksChange = (e) => {
		const { value } = e.target;
		const otherLinksArray = value.split(",").map((link) => link.trim()); // Trim spaces around each link

		setFormData((prevData) => ({
			...prevData,
			otherLinks: otherLinksArray,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your submission logic here using the formData state
		console.log("Form submitted:", formData);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-4 mt-24 md:w-1/2 mx-auto border border-slate-800 rounded-md p-8"
		>
			<div className="flex justify-between items-center">
				<label>Email:</label>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleInputChange}
					className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700 w-1/2"
				/>
			</div>
			<div className="flex justify-between items-center">
				<label>Phone:</label>
				<input
					type="text"
					name="phone"
					value={formData.phone}
					onChange={handleInputChange}
					className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700 w-1/2"
				/>
			</div>
			<div className="flex justify-between items-center">
				<label>Other Links:</label>
				<input
					type="text"
					name="otherLinks"
					value={formData.otherLinks.join(", ")} // Join links with a comma and space
					onChange={handleOtherLinksChange}
					className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700 w-1/2"
				/>
			</div>
			<button
				type="submit"
				className="p-2 bg-slate-800 text-white text-sm rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out"
			>
				Submit
			</button>
		</form>
	);
};

export default AdminContacts;
