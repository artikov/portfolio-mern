import PropTypes from "prop-types";

const CustomContainer = ({ children }) => {
	return (
		<div className="container mx-auto border rounded-md border-stroke bg-customBackground h-[90vh]">
			{children}
		</div>
	);
};

CustomContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

export default CustomContainer;
