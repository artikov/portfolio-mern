import { useState } from "react";

import PropTypes from "prop-types";
import AboutInfo from "./AboutInfo";
import { Link } from "react-router-dom";

const AboutMe = ({ data }) => {
	const [category, setCategory] = useState(data.categories[0]);
	const handleCategoryChange = (item) => {
		setCategory(item);
	};

	return (
		<div className="flex">
			<div className="border-r border-slate-800">
				<h1 className="border-b border-slate-800 p-2">{data.title}</h1>
				{data.categories.map((item) => (
					<div key={item.category} className="flex">
						<Link onClick={() => handleCategoryChange(item)} className="p-2">
							{item.category}
						</Link>
					</div>
				))}
			</div>
			<AboutInfo item={category} />
		</div>
	);
};

AboutMe.propTypes = {
	data: PropTypes.object.isRequired,
};

export default AboutMe;
