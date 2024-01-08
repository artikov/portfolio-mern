import AdminProjectsAll from "./AdminProjectsAll";
import AdminProjectsForm from "./AdminProjectsForm";

const AdminProjects = () => {
	return (
		<div>
			<AdminProjectsForm />
			<hr className="border-slate-800 my-2" />
			<AdminProjectsAll />
		</div>
	);
};

export default AdminProjects;
