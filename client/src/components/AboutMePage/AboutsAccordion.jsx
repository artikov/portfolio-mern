import { useState } from "react";

import AboutsStyleSubCategories from "./AboutsStyleSubCategories";

import { useSelector } from "react-redux";

import PropTypes from "prop-types";

const Accordion = ({ title, subCategories, category, isMobile }) => {
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
					{isOpen ? (
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M19 9l-7 7-7-7"
							></path>
						</svg>
					) : (
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M5 15l7-7 7 7"
							></path>
						</svg>
					)}
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
							isMobile={isMobile}
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