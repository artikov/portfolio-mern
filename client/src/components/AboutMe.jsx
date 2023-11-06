import { useEffect, useState } from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";
import CodeWithComments from "./CodeComment";

import PropTypes from "prop-types";
import Spinner from "./Spinner";

const AboutMe = ({ data }) => {
	const [category, setCategory] = useState(null);

	useEffect(() => {
		if (data?.categories?.length > 0) {
			setCategory(data.categories[0]);
		}
	}, [data]);

	const handleCategoryChange = (item) => {
		setCategory(item);
	};

	return (
		<div className="flex h-full">
			<div className="border-r border-slate-800 min-w-[181px] text-sm">
				<div className="border-b border-slate-800 p-2.5">
					<h1>{data.title}</h1>
				</div>
				{data.categories.map((item) => (
					<div key={item.category} className="flex">
						<div
							onClick={() => handleCategoryChange(item)}
							className="m-2.5 cursor-pointer hover:text-white ease-in-out transition-all"
						>
							{item.category}
						</div>
					</div>
				))}
			</div>
			<div className="mt-10">
				<div className="p-2 border-t border-slate-800 w-full">
					{category === null ? (
						<Spinner />
					) : (
						<CodeWithComments text={category.content} />
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
