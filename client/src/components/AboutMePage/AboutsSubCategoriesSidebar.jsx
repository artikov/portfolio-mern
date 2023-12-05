import AboutSubCategoriesMap from "./AboutSubCategoriesMap";

import Dropdown from "../../assets/icons/dropdown.svg";

import { useSelector } from "react-redux";

const AboutsSubCategoriesSidebar = () => {
	const selectedCategory = useSelector((state) => state.about.selectedCategory);

	// Set the first item in the subcategory

	return (
		<>
			<div className="border-r border-slate-800 min-w-[181px] text-sm">
				<div className="flex gap-2 border-b border-slate-800 p-2.5 text-white">
					<img src={Dropdown} alt="" />
					<h1>{selectedCategory?.title}</h1>
				</div>
				<AboutSubCategoriesMap />
			</div>
		</>
	);
};

export default AboutsSubCategoriesSidebar;
