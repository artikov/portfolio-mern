import AboutIcons from "./AboutIcons";

import { useDispatch } from "react-redux";

import { setSelectedCategory } from "../services/aboutsSlice";

import PropTypes from "prop-types";

const AboutsSidebar = ({ abouts, selectedCategory }) => {
	const dispatch = useDispatch();

	const handleCategoryChange = (item) => {
		dispatch(setSelectedCategory(item));
	};

	return (
		<>
			<div className="border-r border-slate-800">
				<div className="flex flex-col mt-2 w-max">
					{abouts?.map((item) => (
						<div
							key={item.title}
							onClick={() => handleCategoryChange(item)}
							className="m-4"
						>
							<AboutIcons icon={item.title} active={selectedCategory} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

AboutsSidebar.propTypes = {
	abouts: PropTypes.array,
	selectedCategory: PropTypes.object,
};

export default AboutsSidebar;
