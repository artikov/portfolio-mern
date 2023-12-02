import { useState } from "react";

import PropTypes from "prop-types";

const Accordion = ({ title, links }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="border border-gray-300 mb-2 rounded">
			<div
				className="flex items-center justify-between p-4 cursor-pointer"
				onClick={toggleAccordion}
			>
				<div>{title}</div>
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
			</div>
			{isOpen && (
				<div className="p-4">
					<ul>
						{links?.map((link, index) => (
							<li key={index} className="mb-2">
								<a href={link.url} className="text-blue-500">
									{link.category}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

Accordion.propTypes = {
	title: PropTypes.string,
	links: PropTypes.array,
};

export default Accordion;
