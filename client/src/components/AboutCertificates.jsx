import { useState, useEffect } from "react";

import Spinner from "./Spinner";

import PropTypes from "prop-types";

const AboutCertificates = ({ selectedCategory }) => {
	const [allItems, setAllItems] = useState([]);

	useEffect(() => {
		if (!selectedCategory) {
			<Spinner />;
		} else {
			const items = selectedCategory?.images.map((item, i) => (
				<div
					key={i}
					className="w-full mb-6 bg-slate-950 border border-slate-800 rounded-lg overflow-auto hover:shadow-lg hover:shadow-slate-700 hover:scale-105 transition duration-300 ease-in-out"
				>
					<div className="w-full">
						<img src={item.image} alt="" className="object-cover" />
					</div>
					<div>
						<p className="m-4 text-sm text-justify">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
							corporis soluta dolorem fuga reiciendis repudiandae dignissimos
							minus tempore facere error.
							{item.caption}
						</p>
					</div>
				</div>
			));
			setAllItems(items);
		}
	}, [selectedCategory]);

	let carouselItems = [];
	if (allItems.length > 2) {
		carouselItems = [
			...allItems,
			...allItems.map((item, i) => ({
				...item,
				key: i + allItems.length,
			})),
		];
	} else {
		carouselItems = allItems;
	}

	return (
		<div
			className={
				selectedCategory?.images.length > 2
					? "carousel-container"
					: "m-[1rem] gap-[1rem]"
			}
		>
			{carouselItems}
		</div>
	);
};

AboutCertificates.propTypes = {
	selectedCategory: PropTypes.object,
};

export default AboutCertificates;
