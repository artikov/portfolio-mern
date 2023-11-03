import { useState } from "react";
import { Link } from "react-router-dom";
import { about } from "../aboutData";
import AboutMe from "../components/AboutMe";

const AboutMePage = () => {
	const [category, setCategory] = useState(about[0]);

	const handleCategoryChange = (item) => {
		setCategory(item);
	};

	return (
		<div className="flex text-white  h-full items-center">
			<div className="flex h-full">
				<div className="border-r border-slate-800 flex flex-col ">
					{about.map((item) => (
						<Link
							key={item.title}
							onClick={() => handleCategoryChange(item)}
							className="p-2"
						>
							{item.title}
						</Link>
					))}
				</div>
				<AboutMe data={category} />
			</div>
			<div className="w-1/4 border-l border-slate-800 h-full">CODE</div>
		</div>
	);
};

export default AboutMePage;
