import { useState } from "react";

import { Navigate } from "react-router-dom";

const AdminLogin = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const { username, password } = formData;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	const userInfo = false;
	if (userInfo == true) {
		return <Navigate to="/admin" />;
	}

	return (
		<div className="text-slate-500 flex">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col mx-auto gap-4 mt-24 border border-slate-800 rounded-md p-8"
			>
				<h1 className="mx-auto">Admin Login</h1>
				<div className="flex gap-2 items-center">
					<label htmlFor="username">_username</label>
					<input
						type="text"
						id="username"
						name="username"
						value={username}
						onChange={handleChange}
						className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700"
					/>
				</div>
				<div className="flex gap-2 items-center">
					<label htmlFor="password">_password</label>
					<input
						type="password"
						id="password"
						name="password"
						value={password}
						onChange={handleChange}
						className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700"
					/>
				</div>
				<button
					type="submit"
					className="p-2 mt-6 bg-slate-800 text-white text-sm rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out"
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default AdminLogin;
