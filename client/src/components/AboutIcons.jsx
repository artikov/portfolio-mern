import HobbiesSVG from "../assets/icons/hobbies.svg";
import PersonalSVG from "../assets/icons/personal.svg";
import ProfessionalSVG from "../assets/icons/professional.svg";

import PropTypes from "prop-types";

const AboutIcons = (props) => {
	const { icon, active } = props;

	let iconType;
	if (icon === "Personal-Info") {
		iconType = PersonalSVG;
	} else if (icon === "Professional-Info") {
		iconType = ProfessionalSVG;
	} else {
		iconType = HobbiesSVG;
	}

	return (
		<img
			src={iconType}
			alt="about-icons"
			className={`about-icon ${
				active?.title === icon ? "opacity-100" : "opacity-40"
			}`}
			{...props}
		/>
	);
};

AboutIcons.propTypes = {
	icon: PropTypes.string.isRequired,
};

export default AboutIcons;
