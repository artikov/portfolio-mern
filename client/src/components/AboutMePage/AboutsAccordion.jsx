import { useState } from "react";

import AboutsStyleSubCategories from "./AboutsStyleSubCategories";

import Down from "../../assets/icons/dropdown.svg";
import Side from "../../assets/icons/dropdown-side.svg";

import { useSelector } from "react-redux";

import PropTypes from "prop-types";

const Accordion = ({ title, subCategories, category }) => {
	const [isOpen, setIsOpen] = useState(false);

	const selectedSubCategory = useSelector(
		(state) => state.about.selectedSubCategory
	);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="bg-slate-800 mb-2">
			<div
				className="flex items-center gap-2 p-2 mx-2 cursor-pointer text-white"
				onClick={toggleAccordion}
			>
				<div className="transform transition-transform">
					<img src={isOpen ? Down : Side} />
				</div>
				<div>{title}</div>
			</div>
			<div
				className={`px-4 bg-slate-900 accordion-content ${
					isOpen ? "open" : ""
				}`}
			>
				<ul>
					{subCategories?.map((subCategory, i) => (
						<AboutsStyleSubCategories
							key={i}
							i={i}
							subCategory={subCategory}
							category={category}
							selectedSubCategory={selectedSubCategory}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

Accordion.propTypes = {
	title: PropTypes.string,
	subCategories: PropTypes.array,
	category: PropTypes.object,
	isMobile: PropTypes.bool,
};

export default Accordion;
