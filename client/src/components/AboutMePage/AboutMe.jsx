import { useEffect, useRef, useState } from "react";

import Spinner from "../Spinner";

import CodeComment from "../CodeComment";

import { useSelector } from "react-redux";

const AboutMe = () => {
	//line count
	const textRef = useRef(null);
	const [lineCount, setLineCount] = useState([]);

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

	return (
		<div className="flex flex-col h-full ">
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
	);
};

export default AboutMe;
