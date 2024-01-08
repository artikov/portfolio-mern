import { useState } from "react";

import { useUpdateContactsMutation } from "../../services/contactsApiSlice";

import PropTypes from "prop-types";

const AdminContactsForm = ({ contactId }) => {
	const [formData, setFormData] = useState({
		email: "",
		phone: "",
		otherLinks: [],
	});

	const [updateContacts, { isLoading }] = useUpdateContactsMutation();

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleOtherLinksChange = (e) => {
		const { value } = e.target;
		const otherLinksArray = value.split(","); // Trim spaces around each link

		setFormData((prevData) => ({
			...prevData,
			otherLinks: otherLinksArray,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const links = formData.otherLinks
			.map((link) => link.trim())
			.filter((link) => link !== "");

		const updatedData = {
			id: contactId,
			email: formData.email,
			phone: formData.phone,
			links,
		};

		try {
			await updateContacts(updatedData);
			setFormData({
				email: "",
				phone: "",
				otherLinks: [],
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-4 mt-24  mx-auto border border-slate-800 rounded-md p-8"
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
					value={formData.otherLinks} // Join links with a comma and space
					onChange={handleOtherLinksChange}
					className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700 w-1/2"
				/>
			</div>
			<button
				type="submit"
				className="p-2 bg-slate-800 text-white text-sm rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out"
			>
				{isLoading ? "Saving..." : "Save"}
			</button>
		</form>
	);
};

AdminContactsForm.propTypes = {
	contactId: PropTypes.string.isRequired,
};

export default AdminContactsForm;
