import {
	SiNodedotjs,
	SiExpress,
	SiReact,
	SiRedux,
	SiHtml5,
	SiCss3,
	SiMongodb,
	SiJavascript,
	SiPython,
	SiTailwindcss,
} from "react-icons/si";

import PropTypes from "prop-types";

const ProjectsIcons = ({ technology }) => {
	return (
		<div>
			{technology === "Node.js" ? (
				<SiNodedotjs />
			) : technology === "Express" ? (
				<SiExpress />
			) : technology === "React" ? (
				<SiReact />
			) : technology === "Redux" ? (
				<SiRedux />
			) : technology === "HTML" ? (
				<SiHtml5 />
			) : technology === "CSS" ? (
				<SiCss3 />
			) : technology === "MongoDB" ? (
				<SiMongodb />
			) : technology === "JavaScript" ? (
				<SiJavascript />
			) : technology === "Python" ? (
				<SiPython />
			) : technology === "Tailwind CSS" ? (
				<SiTailwindcss />
			) : null}
		</div>
	);
};

ProjectsIcons.propTypes = {
	technology: PropTypes.string,
};

export default ProjectsIcons;
