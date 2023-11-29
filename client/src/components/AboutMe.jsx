import { useEffect, useRef, useState } from "react";

import Spinner from "./Spinner";

import Dropdown from "../assets/icons/dropdown.svg";
import RedFolder from "../assets/icons/red-folder.svg";
import GreenFolder from "../assets/icons/green-folder.svg";
import BlueFolder from "../assets/icons/blue-folder.svg";
import MarkdownFile from "../assets/icons/markdown-file.svg";
import Down from "../assets/icons/down.svg";
import Side from "../assets/icons/side.svg";
import CodeComment from "./CodeComment";

import { useSelector, useDispatch } from "react-redux";
import { setSelectedSubCategory } from "../services/aboutsSlice";

const AboutMe = () => {
	//line count
	const textRef = useRef(null);
	const [lineCount, setLineCount] = useState([]);

	const dispatch = useDispatch();
	const selectedCategory = useSelector((state) => state.about.selectedCategory);
	const selectedSubCategory = useSelector(
		(state) => state.about.selectedSubCategory
	);

	// Count the number of lines in the text
	useEffect(() => {
		function calculateLines() {
			if (textRef.current) {
				const divHeight = textRef.current.clientHeight;
				const lineHeight = parseInt(
					window.getComputedStyle(textRef.current).lineHeight
				);

				if (divHeight > lineHeight) {
					const calculatedLineCount = Math.floor(divHeight / lineHeight);
					setLineCount(
						Array.from({ length: calculatedLineCount + 2 }, (_, index) => index)
					);
				}
			}
		}

		calculateLines();
		window.addEventListener("resize", calculateLines);

		return () => window.removeEventListener("resize", calculateLines);
	}, [selectedSubCategory?.content]);

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
		<div className="flex flex-col sm:flex-row h-full ">
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
			<div>
				<div className="p-2.5 text-sm flex justify-between max-w-[160px] border-r border-slate-800 text-white">
					{selectedSubCategory?.category}
					<span className="text-slate-700">x</span>
				</div>
				<div className="p-2 border-t border-slate-800 lg:w-[500px] xl:w-[800px] flex">
					<CodeComment lines={lineCount} />
					<div>
						{selectedSubCategory === null ? (
							<Spinner />
						) : (
							<div className="mt-[24px]" ref={textRef}>
								{selectedSubCategory.content}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
