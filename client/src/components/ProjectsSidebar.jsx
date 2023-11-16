import Dropdown from "../assets/icons/dropdown.svg";
import { DiReact } from "react-icons/di";

const ProjectsSidebar = () => {
	return (
		<div className="border-r border-slate-800 min-w-[238px]">
			<div className="flex gap-2 border-b border-slate-800 p-2.5">
				<img src={Dropdown} alt="" />
				<h1 className="text-white text-sm">projects</h1>
			</div>
			<div className="">
				<div className="flex items-center gap-2">
					<DiReact />
					React
				</div>
				<div>HTML</div>
				<div>CSS</div>
			</div>
		</div>
	);
};

export default ProjectsSidebar;
