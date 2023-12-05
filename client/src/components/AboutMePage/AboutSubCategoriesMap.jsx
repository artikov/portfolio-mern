import { useSelector } from "react-redux";

import AboutsStyleSubCategories from "./AboutsStyleSubCategories";

const AboutSubCategoriesMap = () => {
	const selectedCategory = useSelector((state) => state.about.selectedCategory);
	const selectedSubCategory = useSelector(
		(state) => state.about.selectedSubCategory
	);

	return (
		<div className="flex flex-col ">
			{selectedCategory?.categories?.map((subCategory, i) => (
				<AboutsStyleSubCategories
					key={i}
					subCategory={subCategory}
					selectedSubCategory={selectedSubCategory}
					i={i}
				/>
			))}
		</div>
	);
};

export default AboutSubCategoriesMap;
