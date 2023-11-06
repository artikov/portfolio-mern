import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const CodeComment = ({ text, lines }) => {
	// Divide text into parts
	function divideTextIntoParts(text, n) {
		// Ensure n is a positive integer
		n = Math.max(1, Math.floor(n));

		const words = text.split(" ");
		const numWords = words.length;
		const wordsPerPart = Math.ceil(numWords / n);

		const textParts = [];
		let currentPart = "";

		for (let i = 0; i < numWords; i++) {
			if (currentPart !== "") {
				currentPart += " ";
			}
			currentPart += words[i];

			if ((i + 1) % wordsPerPart === 0 || i === numWords - 1) {
				textParts.push(currentPart);
				currentPart = "";
			}
		}

		return textParts;
	}

	const [parts, setParts] = useState([]);

	useEffect(() => {
		setParts(divideTextIntoParts(text, lines));
	}, [lines, text]);

	// Function to format the text into multiline comments
	// const formatText = (text) => {
	// const linesArray = text.split(/\n/);

	// 	if (parts.length > 1) {
	// 		return parts
	// 			.map((line, index) => {
	// 				if (index === 0) {
	// 					return `/**\n * ${line}`;
	// 				} else if (index === parts.length - 1) {
	// 					return ` * ${line}\n */`;
	// 				} else {
	// 					return ` * ${line}`;
	// 				}
	// 			})
	// 			.join("\n");
	// 	} else {
	// 		return `/**\n * ${text}\n */`;
	// 	}
	// };

	return (
		<div>
			<div className="code">
				<p>1 /**</p>
				{parts.map((line, index) => (
					<p key={index} className="comment">
						{index + 2} * {line}
					</p>
				))}
				<p>{parts.length + 2} */</p>
			</div>
		</div>
	);
};

CodeComment.propTypes = {
	text: PropTypes.string.isRequired,
};

export default CodeComment;
