import PropTypes from "prop-types";

const CustomContainer = ({ children }) => {
	return (
		<div className="container mx-auto border rounded-md border-slate-800 bg-slate-900 h-[90vh] relative z-10">
			{children}
		</div>
	);
};

CustomContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

export default CustomContainer;
