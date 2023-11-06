import { useEffect, useState } from "react";

import PropTypes from "prop-types";

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
			<div className="border-r border-slate-800 min-w-[180px] text-sm">
				<div className="border-b border-slate-800 p-2.5 cursor-default">
					<h1>{data.title}</h1>
				</div>
				{data.categories.map((item) => (
					<div key={item.category} className="flex cursor-default">
						<div onClick={() => handleCategoryChange(item)} className="p-2">
							{item.category}
						</div>
					</div>
				))}
			</div>
			<div className="mt-10">
				<div className="p-2 border-t border-slate-800">{category?.content}</div>
			</div>
		</div>
	);
};

AboutMe.propTypes = {
	data: PropTypes.object.isRequired,
};

export default AboutMe;
