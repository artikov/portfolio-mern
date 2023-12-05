/* eslint-disable no-mixed-spaces-and-tabs */

import { useState, useEffect } from "react";

import AboutIcons from "./AboutIcons";
import Accordion from "./AboutsAccordion";
import AboutsSubCategoriesSidebar from "./AboutsSubCategoriesSidebar";

import { useDispatch } from "react-redux";

import { setSelectedCategory } from "../../services/aboutsSlice";

import PropTypes from "prop-types";

const AboutsSidebar = ({ abouts, selectedCategory }) => {
	const dispatch = useDispatch();

	const handleCategoryChange = (item) => {
		dispatch(setSelectedCategory(item));
	};

	// console.log(abouts);
	const [isMobile, setMobile] = useState(window.innerWidth < 768);

	// Handle navigation menu status on window resize
	useEffect(() => {
		const updateWindowDimensions = () => {
			setMobile(window.innerWidth < 768);
		};

		updateWindowDimensions();

		window.addEventListener("resize", updateWindowDimensions);

		return () => {
			window.removeEventListener("resize", updateWindowDimensions);
		};
	}, []);

	return (
		<>
			<div className="border-r border-slate-800">
				<div className="flex flex-col mt-2 md:w-max">
					{!isMobile
						? abouts?.map((category) => (
								<div
									key={category.title}
									onClick={() => handleCategoryChange(category)}
									className="m-4 flex items-center gap-2"
								>
									<AboutIcons icon={category.title} active={selectedCategory} />
								</div>
						  ))
						: abouts?.map((category) => (
								<Accordion
									key={category.title}
									title={category.title}
									subCategories={category.categories}
									category={category}
									isMobile={isMobile}
								/>
						  ))}
				</div>
			</div>
			{!isMobile && <AboutsSubCategoriesSidebar />}
		</>
	);
};

AboutsSidebar.propTypes = {
	abouts: PropTypes.array,
	selectedCategory: PropTypes.object,
};

export default AboutsSidebar;
