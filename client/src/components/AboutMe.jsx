import { useEffect, useState } from "react";
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

const AboutMe = ({ data }) => {
	const [category, setCategory] = useState(null);

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

	useEffect(() => {
		if (data?.categories?.length > 0) {
			setCategory(data.categories[0]);
		}
	}, [data]);

	const handleCategoryChange = (item) => {
		setCategory(item);
	};

	return (
		<div className="flex flex-col sm:flex-row h-full ">
			<div className="border-r border-slate-800 min-w-[181px] text-sm">
				<div className="flex gap-2 border-b border-slate-800 p-2.5 text-white">
					<img src={Dropdown} alt="" />
					<h1>{data.title}</h1>
				</div>
				<div className="flex flex-col ">
					{data.categories.map((item, i) => (
						<div
							key={item.category}
							onClick={() => handleCategoryChange(item)}
							className={
								"flex items-center gap-2 m-2.5 cursor-pointer hover:text-white ease-in-out transition-all " +
								(category?.category === item.category && "text-white")
							}
						>
							<div className="w-3">
								<img
									src={category?.category === item.category ? Down : Side}
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
				<div className="p-2 border-t border-slate-800 xl:w-[800px]">
					{category === null ? (
						<Spinner />
					) : (
						<>
							{/* <div ref={textRef} className="hidden">
								{category.content}
							</div> */}

							<div>{category.content}</div>
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
