import { useState } from "react";

const ContactMeForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const { name, email, message } = formData;

	const resetForm = () => {
		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		resetForm();
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	return (
		<div className="text-slate-500 text-sm justify-center m-24">
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col">
					<label htmlFor="name" className="pb-1">
						_name:
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={name}
						onChange={handleChange}
						className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="email" className="pt-4 pb-1">
						_email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={handleChange}
						className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="message" className="pt-4 pb-1">
						_message
					</label>
					<textarea
						id="message"
						name="message"
						value={message}
						onChange={handleChange}
						className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700"
					/>
				</div>
				<button
					type="submit"
					className="p-2 mt-6 bg-slate-800 text-white text-sm rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out"
				>
					submit-message
				</button>
			</form>
		</div>
	);
};

export default ContactMeForm;
