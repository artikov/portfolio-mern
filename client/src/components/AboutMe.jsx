import { useEffect } from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import CodeComment from "./CodeComment";

import PropTypes from "prop-types";
import Spinner from "./Spinner";

import Dropdown from "../assets/icons/dropdown.svg";
import RedFolder from "../assets/icons/red-folder.svg";
import GreenFolder from "../assets/icons/green-folder.svg";
import BlueFolder from "../assets/icons/blue-folder.svg";
import MarkdownFile from "../assets/icons/markdown-file.svg";
import Down from "../assets/icons/down.svg";
import Side from "../assets/icons/side.svg";

import { useSelector, useDispatch } from "react-redux";
import { setSelectedSubCategory } from "../services/aboutsSlice";

const AboutMe = () => {
	//line count
	// const textRef = useRef(null);
	// const [lineCount, setLineCount] = useState(3);

	// useEffect(() => {
	// 	function calculateLines() {
	// 		if (textRef.current) {
	// 			const divHeight = textRef.current.clientHeight;
	// 			const lineHeight = parseInt(
	// 				window.getComputedStyle(textRef.current).lineHeight
	// 			);

	// 			if (divHeight > lineHeight) {
	// 				setLineCount(Math.floor(divHeight / lineHeight));
	// 			}
	// 		}
	// 	}
	// 	calculateLines();
	// 	window.addEventListener("resize", calculateLines);
	// 	return () => window.removeEventListener("resize", calculateLines);
	// }, []);
	// console.log(lineCount);

	const dispatch = useDispatch();
	const selectedCategory = useSelector((state) => state.about.selectedCategory);
	const selectedSubCategory = useSelector(
		(state) => state.about.selectedSubCategory
	);

	useEffect(() => {
		if (!selectedSubCategory) {
			dispatch(setSelectedSubCategory(selectedCategory.categories[0]));
		}
	}, [selectedCategory, selectedSubCategory, dispatch]);

	const handleSubCategoryChange = (item) => {
		dispatch(setSelectedSubCategory(item));
	};

	console.log(selectedCategory);
	console.log(selectedSubCategory);

	return (
		<div className="flex flex-col sm:flex-row h-full ">
			<div className="border-r border-slate-800 min-w-[181px] text-sm">
				<div className="flex gap-2 border-b border-slate-800 p-2.5 text-white">
					<img src={Dropdown} alt="" />
					<h1>{selectedCategory.title}</h1>
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
			<div className="mt-10">
				<div className="p-2 border-t border-slate-800 lg:w-[500px] xl:w-[800px]">
					{selectedSubCategory === null ? (
						<Spinner />
					) : (
						<>
							{/* <div ref={textRef} className="hidden">
								{category.content}
							</div> */}

							<div>{selectedSubCategory.content}</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

AboutMe.propTypes = {
	data: PropTypes.object.isRequired,
};

export default AboutMe;
