import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import PropTypes from "prop-types";

const style = {
	fontSize: ".6rem",
	margin: "1rem",
	padding: "1rem",
	borderRadius: "1rem",
	border: "1px solid #1E2D3D",
};

const CodeSnippet = ({ fileNum }) => {
	const GIST_ID = "239f23ef1b03ed6b48fad6f0086ba8f3";

	const [gistData, setGistData] = useState(null);

	// Fetch Gist data // THIS NEEDS TO BE MANAGED IN SLICES
	useEffect(() => {
		const apiUrl = `https://api.github.com/gists/${GIST_ID}`;

		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => {
				setGistData(data);
			})
			.catch((error) => {
				console.error("Error fetching Gist data:", error);
			});
	}, [GIST_ID]);

	if (!gistData) {
		return <div>Loading Gist data...</div>;
	}

	return (
		<SyntaxHighlighter wrapLongLines style={atomOneDark} customStyle={style}>
			{gistData.files[Object.keys(gistData.files)[fileNum]].content}
		</SyntaxHighlighter>
	);
};

CodeSnippet.propTypes = {
	fileNum: PropTypes.number.isRequired,
};

export default CodeSnippet;
