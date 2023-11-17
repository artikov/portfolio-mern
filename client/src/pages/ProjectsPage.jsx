import ProjectCard from "../components/ProjectCard";
import ProjectsSidebar from "../components/ProjectsSidebar";

import Message from "../components/Message";
import Spinner from "../components/Spinner";

import { useFetchProjectsQuery } from "../services/projectsApiSlice";

const ProjectsPage = () => {
	const { data: projects, isLoading, error } = useFetchProjectsQuery();

	return (
		<div className="flex h-full text-slate-500">
			<ProjectsSidebar />
			<div className="flex flex-col w-full">
				<div className="text-white text-sm border-r border-slate-800 p-2.5 flex gap-8 w-fit">
					<h1>React Projects</h1>
					<p className="text-slate-600">x</p>
				</div>
				<div className="border-t border-slate-800 p-4 px-10 grid grid-cols-3 gap-10 overflow-auto ">
					{isLoading ? (
						<Spinner />
					) : error ? (
						<Message variant="danger">{error}</Message>
					) : (
						projects?.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectsPage;
