import { useState, useEffect } from "react";

import Dropdown from "../../assets/icons/dropdown.svg";
import Side from "../../assets/icons/dropdown-side.svg";
import Check from "../../assets/icons/check.svg";

import { useDispatch, useSelector } from "react-redux";
import { toggleTechnology } from "../../services/technologiesSlice";

import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";

import ProjectsIcons from "./ProjectsIcons";

const ProjectsSidebar = ({ technologies }) => {
	const dispatch = useDispatch();
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	const [isOpen, setIsOpen] = useState(!isMobile);

	const selectedTechnologies = useSelector(
		(state) => state.technologies.selectedTechnologies
	);

	const handleTechnologyChange = (technology) => {
		dispatch(toggleTechnology(technology));
	};

	const handleToggleAccordion = () => {
		if (isMobile) {
			setIsOpen(!isOpen);
		}
	};

	useEffect(() => {
		if (!isMobile) {
			setIsOpen(true);
		}
	}, [isMobile]);

	return (
		<div className="border-r border-slate-800 min-w-[238px]">
			<div
				className="flex gap-2 border-b border-slate-800 p-2.5 px-4 bg-slate-800 md:bg-transparent"
				onClick={handleToggleAccordion}
			>
				<img src={isOpen ? Dropdown : Side} alt="" />
				<h1 className="text-white text-sm">Projects</h1>
			</div>
			<div className={`ml-2 mt-2 accordion-content ${isOpen ? "open" : ""}`}>
				{technologies?.map((technology, i) => (
					<div key={i}>
						<div className="inline-flex items-center">
							<label className="relative flex gap-2 cursor-pointer items-center p-3">
								<input
									type="checkbox"
									id={i}
									name={technology}
									checked={selectedTechnologies.includes(technology)}
									onChange={() => handleTechnologyChange(technology)}
									className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-600 transition-all before:rounded-full checked:border-transparent hover:shadow hover:shadow-slate-600 checked:hover:shadow-none"
								/>
								<div className="pointer-events-none absolute top-2/4 left-[22px] -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
									<img src={Check} alt="" />
								</div>
								<ProjectsIcons technology={technology} />
								{technology}
							</label>
						</div>
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
