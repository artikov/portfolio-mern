import { useEffect } from "react";

import AboutMe from "../components/AboutMePage/AboutMe";
import Spinner from "../components/Spinner";
import Message from "../components/Message";
import AboutsSidebar from "../components/AboutMePage/AboutsSidebar";
import AboutCertificates from "../components/AboutMePage/AboutCertificates";

import AOS from "aos";

import { useSelector, useDispatch } from "react-redux";
import {
	setSelectedCategory,
	setSelectedSubCategory,
} from "../services/aboutsSlice";
import { useFetchAboutsQuery } from "../services/aboutsApiSlice";

const AboutMePage = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	const dispatch = useDispatch();

	const selectedCategory = useSelector((state) => state.about.selectedCategory);
	const selectedSubCategory = useSelector(
		(state) => state.about.selectedSubCategory
	);

	const { data: abouts, isLoading, error } = useFetchAboutsQuery();

	useEffect(() => {
		if (abouts?.length > 0 && !selectedCategory) {
			dispatch(setSelectedCategory(abouts[0]));
		}
	}, [abouts, selectedCategory, dispatch]);

	useEffect(() => {
		const checkToSetFirstItem = !selectedCategory?.categories.some(
			(category) => category?.category === selectedSubCategory?.category
		);

		if (!selectedSubCategory || checkToSetFirstItem) {
			dispatch(setSelectedSubCategory(selectedCategory?.categories[0]));
		}
	}, [selectedCategory, selectedSubCategory, dispatch]);

	if (error) return <Message variant="danger">{error.status}</Message>;

	return (
		<div className="flex flex-col md:flex-row text-slate-500 h-full overflow-auto">
			<AboutsSidebar abouts={abouts} selectedCategory={selectedCategory} />
			<div>{selectedCategory ? <AboutMe /> : <Spinner />}</div>
			<div
				data-aos="fade-up"
				className="hidden md:block w-full mt-10 border-l border-t border-slate-800 p-2 overflow-y-hidden"
			>
				{isLoading ? (
					<Spinner />
				) : (
					<AboutCertificates selectedCategory={selectedCategory} />
				)}
			</div>
		</div>
	);
};

export default AboutMePage;
