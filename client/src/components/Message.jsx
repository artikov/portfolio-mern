import PropTypes from "prop-types";

const Message = ({ variant, children }) => {
	return (
		<div
			className={`font-regular relative mb-4 block w-full rounded-lg bg-${variant}-500 p-4 text-base leading-5 text-white opacity-100 text-center`}
		>
			{children}
		</div>
	);
};

Message.propTypes = {
	variant: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default Message;
