import AdminMessages from "./AdminMessages";
import AdminAbouts from "./AdminAbouts";
import AdminContacts from "./AdminContacts";
import AdminProjects from "./AdminProjects";

import PropTypes from "prop-types";

const AdminMain = ({ selectedComponent }) => {
	return (
		<div className="p-4">
			{selectedComponent === "messages" && <AdminMessages />}
			{selectedComponent === "abouts" && <AdminAbouts />}
			{selectedComponent === "projects" && <AdminProjects />}
			{selectedComponent === "contacts" && <AdminContacts />}
		</div>
	);
};

AdminMain.propTypes = {
	selectedComponent: PropTypes.string.isRequired,
};

export default AdminMain;
