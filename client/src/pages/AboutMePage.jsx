import { useState } from "react";
import { Link } from "react-router-dom";
import { about } from "../aboutData";
import AboutMe from "../components/AboutMe";

import Spinner from "../components/Spinner";

import { useFetchAboutsQuery } from "../services/aboutsApiSlice";

const AboutMePage = () => {
	const [category, setCategory] = useState(about[0]);

	const { data: abouts, isLoading, error } = useFetchAboutsQuery();

	const handleCategoryChange = (item) => {
		setCategory(item);
	};

	return (
		<div className="flex text-white  h-full items-center">
			<div className="flex h-full">
				<div className="border-r border-slate-800 flex flex-col ">
					{isLoading ? (
						<Spinner />
					) : (
						abouts.map((item) => (
							<Link
								key={item.title}
								onClick={() => handleCategoryChange(item)}
								className="p-2"
							>
								{item.title}
							</Link>
						))
					)}
				</div>
				<AboutMe data={category} />
			</div>
			<div className="w-1/4 border-l border-slate-800 h-full">CODE</div>
		</div>
	);
};

export default AboutMePage;
