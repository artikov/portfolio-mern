import { useEffect } from "react";

import AboutSubCategoriesMap from "./AboutSubCategoriesMap";

import Dropdown from "../../assets/icons/dropdown.svg";

import { setSelectedSubCategory } from "../../services/aboutsSlice";

import { useSelector, useDispatch } from "react-redux";

const AboutsSubCategoriesSidebar = () => {
	const dispatch = useDispatch();

	const selectedCategory = useSelector((state) => state.about.selectedCategory);
	const selectedSubCategory = useSelector(
		(state) => state.about.selectedSubCategory
	);

	// Set the first item in the subcategory
	useEffect(() => {
		const checkToSetFirstItem = !selectedCategory?.categories.some(
			(category) => category?.category === selectedSubCategory?.category
		);
		if (!selectedSubCategory || checkToSetFirstItem) {
			dispatch(setSelectedSubCategory(selectedCategory?.categories[0]));
		}
	}, [selectedCategory, selectedSubCategory, dispatch]);

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
