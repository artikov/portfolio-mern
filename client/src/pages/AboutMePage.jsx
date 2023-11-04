import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AboutMe from "../components/AboutMe";
import Spinner from "../components/Spinner";
import Message from "../components/Message";

import { useFetchAboutsQuery } from "../services/aboutsApiSlice";

const AboutMePage = () => {
	const { data: abouts, isLoading, error } = useFetchAboutsQuery();
	const [selectedCategory, setSelectedCategory] = useState(null);

	useEffect(() => {
		if (abouts?.length > 0) {
			setSelectedCategory(abouts[0]);
		}
	}, [abouts]);

	const handleCategoryChange = (item) => {
		setSelectedCategory(item);
	};

	if (isLoading) return <Spinner />;

	if (error) return <Message variant="danger">{error}</Message>;

	return (
		<div className="flex text-white h-full items-center">
			<div className="flex h-full">
				<div className="border-r border-slate-800 flex flex-col">
					{abouts.map((item) => (
						<Link
							key={item.title}
							to="#"
							onClick={() => handleCategoryChange(item)}
							className="p-2"
						>
							{item.title}
						</Link>
					))}
				</div>
				<div className="w-3/4 h-full border-l border-slate-800">
					{selectedCategory ? <AboutMe data={selectedCategory} /> : <Spinner />}
				</div>
			</div>
			<div className="w-1/4 border-l border-slate-800 h-full">CODE</div>
		</div>
	);
};

export default AboutMePage;
