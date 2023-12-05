/* eslint-disable no-mixed-spaces-and-tabs */
import AboutIcons from "./AboutIcons";
import Accordion from "./AboutsAccordion";
import AboutsSubCategoriesSidebar from "./AboutsSubCategoriesSidebar";

import { useDispatch } from "react-redux";

import { setSelectedCategory } from "../../services/aboutsSlice";

import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";

const AboutsSidebar = ({ abouts, selectedCategory }) => {
	const dispatch = useDispatch();

	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	const handleCategoryChange = (item) => {
		dispatch(setSelectedCategory(item));
	};

	return (
		<>
			<div className="border-r border-slate-800">
				<h1 className="md:hidden p-4 text-white">_about-me</h1>
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
