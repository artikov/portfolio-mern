import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { useGetGistsQuery } from "../services/githubSlice";
import PropTypes from "prop-types";

import Spinner from "./Spinner";
import Message from "./Message";

const style = {
	fontSize: ".6rem",
	margin: "1rem",
	padding: "1rem",
	borderRadius: "1rem",
	backdropFilter: "blur(25px) saturate(161%)",
	WebkitBackdropFilter: "blur(25px) saturate(161%)",
	backgroundColor: "rgba(0, 0, 0, 0.5)",
};

const CodeSnippet = ({ fileNum }) => {
	const GIST_ID = "239f23ef1b03ed6b48fad6f0086ba8f3";

	const { data: gistData, error, isLoading } = useGetGistsQuery(GIST_ID);

	if (isLoading) {
		return <Spinner />;
	}

	if (error) {
		return (
			<Message variant="red">{error?.data?.message || error?.error}</Message>
		);
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
