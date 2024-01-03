import { useState } from "react";

import { useAddCategoryMutation } from "../../services/aboutsApiSlice";

import PropTypes from "prop-types";

const AdminAboutsCatForm = ({ aboutId }) => {
	const [formData, setFormData] = useState({
		title: "",
		content: "",
	});

	const [addCategory, { isLoading }] = useAddCategoryMutation();

	const { title, content } = formData;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await addCategory({ aboutId, category: title, content });
		} catch (error) {
			console.error(error);
		}

		console.log(formData);
	};

	return (
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
				{isLoading ? "Loading..." : "Submit"}
			</button>
		</form>
	);
};

AdminAboutsCatForm.propTypes = {
	aboutId: PropTypes.string.isRequired,
};

export default AdminAboutsCatForm;
