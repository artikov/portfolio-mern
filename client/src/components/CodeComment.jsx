import PropTypes from "prop-types";

const CodeWithComments = ({ text }) => {
	// Split the code into lines

	const lines = text.split(".");
	const formattedText = lines
		.map((line, index) => {
			if (index === 0) {
				return `/**\n*  ${line}\n`;
			} else if (index === lines.length - 1) {
				return `* ${line}\n*/`;
			} else {
				return `* ${line}\n`;
			}
		})
		.join("");

	return <pre>{formattedText}</pre>;
};

CodeWithComments.propTypes = {
	text: PropTypes.string.isRequired,
};

export default CodeWithComments;
