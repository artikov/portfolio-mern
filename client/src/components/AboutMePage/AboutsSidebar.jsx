/* eslint-disable no-mixed-spaces-and-tabs */
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
	const mobile = window.innerWidth < 768;

	return (
		<>
			<div className="border-r border-slate-800">
				<div className="flex flex-col mt-2 w-max">
					{!mobile
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
									selectedCategory={selectedCategory}
									handleCategoryChange={handleCategoryChange}
								/>
						  ))}
				</div>
			</div>
			<AboutsSubCategoriesSidebar />
		</>
	);
};

AboutsSidebar.propTypes = {
	abouts: PropTypes.array,
	selectedCategory: PropTypes.object,
};

export default AboutsSidebar;
