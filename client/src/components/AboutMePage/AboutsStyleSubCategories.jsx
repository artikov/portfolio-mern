import RedFolder from "../../assets/icons/red-folder.svg";
import GreenFolder from "../../assets/icons/green-folder.svg";
import BlueFolder from "../../assets/icons/blue-folder.svg";
import MarkdownFile from "../../assets/icons/markdown-file.svg";
import Down from "../../assets/icons/down.svg";
import Side from "../../assets/icons/side.svg";

import {
	setSelectedSubCategory,
	setSelectedCategory,
} from "../../services/aboutsSlice";

import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

const AboutsStyleSubCategories = ({
	subCategory,
	selectedSubCategory,
	i,
	category,
	isMobile,
}) => {
	const dispatch = useDispatch();

	const handleSubCategoryChange = (item, category) => {
		dispatch(setSelectedSubCategory(item));
		if (isMobile) {
			dispatch(setSelectedCategory(category));
		}
	};

	return (
		<div
			key={subCategory?.category}
			onClick={() => handleSubCategoryChange(subCategory, category)}
			className={
				"flex items-center gap-2 m-2.5 cursor-pointer hover:text-white ease-in-out transition-all " +
				(selectedSubCategory?.category === subCategory?.category &&
					"text-white")
			}
		>
			<div className="w-3">
				<img
					src={
						selectedSubCategory?.category === subCategory?.category
							? Down
							: Side
					}
					alt=""
				/>
			</div>
			<img
				src={
					i == 0
						? RedFolder
						: i == 1
						? GreenFolder
						: i == 2
						? BlueFolder
						: MarkdownFile
				}
				className=""
				alt=""
			/>
			<div className="">{subCategory?.category}</div>
		</div>
	);
};

AboutsStyleSubCategories.propTypes = {
	subCategory: PropTypes.object,
	handleSubCategoryChange: PropTypes.func,
	selectedSubCategory: PropTypes.object,
	i: PropTypes.number,
	category: PropTypes.object,
	isMobile: PropTypes.bool,
};

export default AboutsStyleSubCategories;
