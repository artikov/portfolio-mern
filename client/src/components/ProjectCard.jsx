import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
	const projectCompleteDate = new Date(
		project.completeDate
	).toLocaleDateString();

	return (
		<div>
			<div>{project.name}</div>
			<div className="border border-slate-800 bg-slate-950 rounded-lg overflow-hidden flex flex-col">
				<div className="">
					<img
						src={project.image}
						alt=""
						className="object-cover h-48 w-full"
					/>
				</div>
				<p className="m-4">{project.detail}</p>
				<p className="mx-4">{projectCompleteDate}</p>
				<a
					href={project.projectLink}
					target="_blank"
					rel="noreferrer"
					className="bg-slate-800 rounded-md m-4 p-2.5 text-white w-fit hover:scale-105 hover:bg-slate-600 transition-all text-sm"
				>
					view-project
				</a>
			</div>
		</div>
	);
};

ProjectCard.propTypes = {
	project: PropTypes.object.isRequired,
};

export default ProjectCard;
