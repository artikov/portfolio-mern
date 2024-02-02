import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useLogoutMutation } from "../../services/usersApiSlice";
import { logout } from "../../services/authSlice";

import PropTypes from "prop-types";

const AdminSidebar = ({ selectedComponent, handleComponentChange }) => {
	// DISPATCH LOGOUT
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [logoutAPI] = useLogoutMutation();

	const handleLogout = async () => {
		try {
			navigate("/");
			await logoutAPI().unwrap();
			dispatch(logout());
		} catch (error) {
			console.log(error);
		}
	};

	const isActive = (component) => {
		if (selectedComponent === component) {
			return "text-slate-100";
		}
		return "text-slate-500";
	};

	return (
		<div className="flex flex-col gap-2 items-center text-center">
			<div
				className={`${isActive(
					"messages"
				)} cursor-pointer bg-slate-800 rounded-md p-2 w-full hover:text-slate-100 hover:bg-slate-700 transition-all`}
				onClick={() => handleComponentChange("messages")}
			>
				<h1>Messages</h1>
			</div>
			<div
				className={`${isActive(
					"abouts"
				)} cursor-pointer  bg-slate-800 rounded-md p-2 w-full hover:text-slate-100 hover:bg-slate-700 transition-all`}
				onClick={() => handleComponentChange("abouts")}
			>
				<h1>Abouts</h1>
			</div>
			<div
				className={`${isActive(
					"projects"
				)} cursor-pointer  bg-slate-800 rounded-md p-2 w-full  hover:text-slate-100 hover:bg-slate-700 transition-all`}
				onClick={() => handleComponentChange("projects")}
			>
				Projects
			</div>
			<div
				className={`${isActive(
					"contacts"
				)} cursor-pointer  bg-slate-800 rounded-md p-2 w-full  hover:text-slate-100 hover:bg-slate-700 transition-all`}
				onClick={() => handleComponentChange("contacts")}
			>
				Contacts
			</div>
			<div
				className={` cursor-pointer  bg-red-500 text-white rounded-md p-2 w-full  hover:text-slate-100 hover:bg-red-700 transition-all`}
				onClick={handleLogout}
			>
				Logout
			</div>
		</div>
	);
};

AdminSidebar.propTypes = {
	selectedComponent: PropTypes.string.isRequired,
	handleComponentChange: PropTypes.func.isRequired,
};

export default AdminSidebar;
