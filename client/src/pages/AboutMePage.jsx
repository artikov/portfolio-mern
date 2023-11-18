import { useEffect } from "react";

import AboutMe from "../components/AboutMe";
import Spinner from "../components/Spinner";
import Message from "../components/Message";
import AboutIcons from "../components/AboutIcons";
import AboutCertificates from "../components/AboutCertificates";

import AOS from "aos";

import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory } from "../services/aboutsSlice";
import { useFetchAboutsQuery } from "../services/aboutsApiSlice";

const AboutMePage = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	const dispatch = useDispatch();

	const selectedCategory = useSelector((state) => state.about.selectedCategory);

	const { data: abouts, isLoading, error } = useFetchAboutsQuery();
	// const [selectedCategory, setSelectedCategory] = useState(null);

	useEffect(() => {
		if (abouts?.length > 0 && !selectedCategory) {
			dispatch(setSelectedCategory(abouts[0]));
		}
	}, [abouts, selectedCategory, dispatch]);

	const handleCategoryChange = (item) => {
		dispatch(setSelectedCategory(item));
	};

	if (isLoading) return <Spinner />;

	if (error) return <Message variant="danger">{error}</Message>;

	return (
		<div className="flex text-slate-500 h-full">
			<div data-aos="fade" className="border-r border-slate-800">
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
			<div data-aos="fade" className="">
				{selectedCategory ? <AboutMe /> : <Spinner />}
			</div>
			<div
				data-aos="fade-up"
				className="hidden md:block w-full mt-10 border-l border-t border-slate-800 p-2 overflow-y-hidden"
			>
				<AboutCertificates selectedCategory={selectedCategory} />
			</div>
		</div>
	);
};

export default AboutMePage;
