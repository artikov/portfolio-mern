import { useState, useEffect } from "react";

import AboutMe from "../components/AboutMe";
import Spinner from "../components/Spinner";
import Message from "../components/Message";
import AboutIcons from "../components/AboutIcons";

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
		<div className="flex text-slate-500 h-full items-center ">
			<div className="h-full border-r border-slate-800">
				<div className="flex flex-col mt-2 w-max">
					{abouts.map((item) => (
						<div
							key={item.title}
							onClick={() => handleCategoryChange(item)}
							className="m-4"
						>
							<AboutIcons icon={item.title} />
						</div>
					))}
				</div>
			</div>
			<div className="h-full">
				{selectedCategory ? <AboutMe data={selectedCategory} /> : <Spinner />}
			</div>
			<div className="w-1/2 border-l border-slate-800 h-full">CODE</div>
		</div>
	);
};

export default AboutMePage;
