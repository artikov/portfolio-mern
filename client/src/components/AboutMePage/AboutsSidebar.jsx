/* eslint-disable no-mixed-spaces-and-tabs */

import { useState, useEffect } from "react";

import AboutIcons from "./AboutIcons";
import Accordion from "../Accordion";
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
						? abouts?.map((item) => (
								<div
									key={item.title}
									onClick={() => handleCategoryChange(item)}
									className="m-4 flex items-center gap-2"
								>
									<AboutIcons icon={item.title} active={selectedCategory} />
								</div>
						  ))
						: abouts?.map((item) => (
								<Accordion
									key={item.title}
									title={item.title}
									links={item.categories}
									item={item}
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
