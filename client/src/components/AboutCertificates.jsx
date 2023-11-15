import { useRef } from "react";
import Slider from "react-slick";

import PropTypes from "prop-types";

const AboutCertificates = ({ selectedCategory }) => {
	const sliderRef = useRef();

	const sliderSettings = {
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		infinite: true,
	};

	const handleScroll = (e) => {
		if (e.deltaY > 0) {
			sliderRef.current.slickNext();
		} else {
			sliderRef.current.slickPrev();
		}
	};

	return (
		<div className="my-2" onWheel={handleScroll}>
			<Slider ref={sliderRef} {...sliderSettings}>
				{selectedCategory?.images.map((item, i) => (
					<div
						key={i}
						className="bg-slate-950 border border-slate-800 rounded overflow-auto"
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
			</Slider>
		</div>
	);
};

AboutCertificates.propTypes = {
	selectedCategory: PropTypes.object,
};

export default AboutCertificates;
