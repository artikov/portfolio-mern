import ProjectsSidebar from "../components/ProjectsSidebar";

const ProjectsPage = () => {
	return (
		<div className="flex h-full text-slate-500">
			<ProjectsSidebar />
			<div className="flex flex-col w-full">
				<div className="text-white text-sm border-r border-slate-800 p-2.5 flex gap-8 w-fit">
					<h1>React Projects</h1>
					<p className="text-slate-600">x</p>
				</div>
				<div className="border-t border-slate-800 p-4 flex gap-4">
					<div className="border">content</div>
					<div className="border">content</div>
					<div className="border">content</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsPage;
