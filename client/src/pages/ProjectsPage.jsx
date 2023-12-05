/* eslint-disable no-mixed-spaces-and-tabs */
import ProjectCard from "../components/ProjectsPage/ProjectCard";
import ProjectsSidebar from "../components/ProjectsPage/ProjectsSidebar";

import Message from "../components/Message";
import Spinner from "../components/Spinner";

import { useSelector } from "react-redux";
import { useFetchProjectsQuery } from "../services/projectsApiSlice";

const ProjectsPage = () => {
	const { data: projects, isLoading, error } = useFetchProjectsQuery();

	const selectedTechnologies = useSelector(
		(state) => state.technologies.selectedTechnologies
	);

	// Filter projects based on selected technologies
	const filteredProjects = projects?.filter((project) =>
		project.technologies.some((technology) =>
			selectedTechnologies.includes(technology)
		)
	);

	// Extract all technologies form all projects without repitation
	const allTechnologies = [
		...new Set(projects?.flatMap((project) => project.technologies)),
	];

	return (
		<div className="flex flex-col md:flex-row h-full text-slate-500 overflow-auto">
			<h1 className="md:hidden p-4 text-white">_projects</h1>
			<ProjectsSidebar technologies={allTechnologies} />
			<div className="flex flex-col w-full">
				<div className="text-white text-sm border-r border-slate-800 p-2.5 hidden md:flex gap-8 w-fit">
					<div className="flex gap-2">
						{selectedTechnologies.length == 0
							? "all projects"
							: selectedTechnologies.map((tech) => (
									<span key={tech}>{tech};</span>
							  ))}
					</div>
					<p className="text-slate-600">x</p>
				</div>
				<div className="md:hidden text-white p-4">
					<span>&#47;&#47;projects </span>
					<span className="text-slate-500">
						&#47;
						{selectedTechnologies.length == 0
							? ` all`
							: selectedTechnologies.map((tech) => (
									<span key={tech}> {tech}; </span>
							  ))}
					</span>
				</div>
				<div className="md:border-t border-slate-800 p-4 md:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 overflow-auto ">
					{isLoading ? (
						<Spinner />
					) : error ? (
						<Message variant="danger">{error.status}</Message>
					) : filteredProjects == 0 ? (
						projects?.map((project) => (
							<ProjectCard key={project._id} project={project} />
						))
					) : (
						filteredProjects?.map((project) => (
							<ProjectCard key={project._id} project={project} />
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectsPage;
