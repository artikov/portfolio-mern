import { useEffect } from "react";

import Dropdown from "../../assets/icons/dropdown.svg";
import RedFolder from "../../assets/icons/red-folder.svg";
import GreenFolder from "../../assets/icons/green-folder.svg";
import BlueFolder from "../../assets/icons/blue-folder.svg";
import MarkdownFile from "../../assets/icons/markdown-file.svg";
import Down from "../../assets/icons/down.svg";
import Side from "../../assets/icons/side.svg";

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
		const checkToSetFirstItem = !selectedCategory.categories.some(
			(category) => category?.category === selectedSubCategory?.category
		);
		if (!selectedSubCategory || checkToSetFirstItem) {
			dispatch(setSelectedSubCategory(selectedCategory.categories[0]));
		}
	}, [selectedCategory, selectedSubCategory, dispatch]);

	const handleSubCategoryChange = (item) => {
		dispatch(setSelectedSubCategory(item));
	};

	return (
		<>
			<div className="border-r border-slate-800 min-w-[181px] text-sm">
				<div className="flex gap-2 border-b border-slate-800 p-2.5 text-white">
					<img src={Dropdown} alt="" />
					<h1>{selectedCategory?.title}</h1>
				</div>
				<div className="flex flex-col ">
					{selectedCategory.categories.map((item, i) => (
						<div
							key={item.category}
							onClick={() => handleSubCategoryChange(item)}
							className={
								"flex items-center gap-2 m-2.5 cursor-pointer hover:text-white ease-in-out transition-all " +
								(selectedSubCategory?.category === item.category &&
									"text-white")
							}
						>
							<div className="w-3">
								<img
									src={
										selectedSubCategory?.category === item.category
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
							<div className="">{item.category}</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default AboutsSubCategoriesSidebar;
