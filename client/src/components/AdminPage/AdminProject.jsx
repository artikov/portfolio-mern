import { useDeleteProjectMutation } from "../../services/projectsApiSlice";

import PropTypes from "prop-types";

const AdminProject = ({ project }) => {
	const [deleteProject, { isLoading: isDeleting }] = useDeleteProjectMutation();

	const handleRemoveProject = async () => {
		try {
			await deleteProject(project._id);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="relative">
			{isDeleting && (
				<div className="absolute bg-slate-800/60 rounded w-full h-full text-center">
					Deleting...
				</div>
			)}
			<div className="flex flex-col md:flex-row text-sm md:text-base justify-between border border-slate-800 rounded-md md:p-8 relative">
				<div className="flex flex-col gap-4">
					<h1 className=" text-lg text-white">{project.name}</h1>
					<p>{project.detail}</p>
					<a className="underline cursor-pointer">{project.projectLink}</a>
					<p>{project.technologies.join(", ")}</p>
					<p>{project.completeDate}</p>
				</div>
				<div>
					<img src={project.image} alt="" />
				</div>
				<button
					className="absolute right-0 top-0 bg-red-900 px-4 py-2 rounded text-white hover:bg-red-500 transition-all"
					onClick={handleRemoveProject}
				>
					x
				</button>
			</div>
		</div>
	);
};

AdminProject.propTypes = {
	project: PropTypes.object.isRequired,
};

export default AdminProject;
