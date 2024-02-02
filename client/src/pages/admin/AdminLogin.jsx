import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { setCredentials } from "../../services/authSlice";
import { useLoginMutation } from "../../services/usersApiSlice";

const AdminLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { userInfo } = useSelector((state) => state.auth);

	const [login, { isLoading }] = useLoginMutation();

	useEffect(() => {
		if (userInfo?.isAdmin) {
			navigate("/admin");
		}
	}, [userInfo, navigate]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// DISPATCH LOGIN
		try {
			const res = await login({ email, password }).unwrap();

			dispatch(setCredentials({ ...res }));

			navigate("/admin");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="text-slate-500 flex">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col mx-auto gap-4 mt-24 border border-slate-800 rounded-md p-8"
			>
				<h1 className="mx-auto">Admin Login</h1>
				<div className="flex gap-2 items-center">
					<label htmlFor="email">_email</label>
					<input
						type="text"
						id="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
						onChange={(e) => setPassword(e.target.value)}
						className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700"
					/>
				</div>
				<button
					type="submit"
					className="p-2 mt-6 bg-slate-800 text-white text-sm rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out"
				>
					{isLoading ? "Loading..." : "Login"}
				</button>
			</form>
		</div>
	);
};

export default AdminLogin;
