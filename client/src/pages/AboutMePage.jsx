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
		<div className="flex text-slate-500 h-full">
			<div className="h-full border-r border-slate-800">
				<div className="flex flex-col mt-2 w-max">
					{abouts.map((item) => (
						<div
							key={item.title}
							onClick={() => handleCategoryChange(item)}
							className="m-4"
						>
							<AboutIcons icon={item.title} active={selectedCategory} />
						</div>
					))}
				</div>
			</div>
			<div className="h-full">
				{selectedCategory ? <AboutMe data={selectedCategory} /> : <Spinner />}
			</div>
			<div className="hidden lg:flex w-full border-l border-slate-800 ">
				<div className="w-full border-t border-slate-800 mt-10 p-4 overflow-y-scroll">
					{selectedCategory?.images.map((item, i) => (
						<div
							key={i}
							className="flex flex-col justify-center items-center bg-slate-950 border border-slate-800 rounded-lg m-4 mb-8 overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out"
						>
							<div className="w-full">
								<img src={item.image} alt="" className="object-cover" />
							</div>
							<div>
								<p className="m-4 text-sm text-justify">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Nostrum corporis soluta dolorem fuga reiciendis repudiandae
									dignissimos minus tempore facere error.
									{item.caption}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutMePage;
