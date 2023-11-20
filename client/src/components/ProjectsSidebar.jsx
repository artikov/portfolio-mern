import Dropdown from "../assets/icons/dropdown.svg";
import {
	SiNodedotjs,
	SiExpress,
	SiReact,
	SiRedux,
	SiHtml5,
	SiCss3,
	SiMongodb,
	SiJavascript,
	SiPython,
	SiTailwindcss,
} from "react-icons/si";

import { useDispatch, useSelector } from "react-redux";
import { toggleTechnology } from "../services/technologiesSlice";

import PropTypes from "prop-types";

const ProjectsSidebar = ({ technologies }) => {
	const dispatch = useDispatch();
	const selectedTechnologies = useSelector(
		(state) => state.technologies.selectedTechnologies
	);

	const handleTechnologyChange = (technology) => {
		dispatch(toggleTechnology(technology));
	};

	return (
		<div className="border-r border-slate-800 min-w-[238px]">
			<div className="flex gap-2 border-b border-slate-800 p-2.5">
				<img src={Dropdown} alt="" />
				<h1 className="text-white text-sm">projects</h1>
			</div>
			<div className="">
				{technologies?.map((technology) => (
					<div key={technology} className="flex items-center gap-2">
						<input
							type="checkbox"
							id={technology}
							name={technology}
							checked={selectedTechnologies.includes(technology)}
							onChange={() => handleTechnologyChange(technology)}
						/>
						{technology === "Node.js" ? (
							<SiNodedotjs />
						) : technology === "Express" ? (
							<SiExpress />
						) : technology === "React" ? (
							<SiReact />
						) : technology === "Redux" ? (
							<SiRedux />
						) : technology === "HTML" ? (
							<SiHtml5 />
						) : technology === "CSS" ? (
							<SiCss3 />
						) : technology === "MongoDB" ? (
							<SiMongodb />
						) : technology === "JavaScript" ? (
							<SiJavascript />
						) : technology === "Python" ? (
							<SiPython />
						) : technology === "Tailwind CSS" ? (
							<SiTailwindcss />
						) : null}
						{technology}
					</div>
				))}
			</div>
		</div>
	);
};

ProjectsSidebar.propTypes = {
	technologies: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectsSidebar;
