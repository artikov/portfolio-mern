import { useRef, useState, useEffect } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ContactMeCodeSnippet = () => {
	const codeContainerRef = useRef(null);
	const [containerWidth, setContainerWidth] = useState(0);

	useEffect(() => {
		const updateContainerWidth = () => {
			if (codeContainerRef.current) {
				setContainerWidth(codeContainerRef.current.offsetWidth);
			}
		};

		updateContainerWidth();

		window.addEventListener("resize", updateContainerWidth);

		return () => {
			window.removeEventListener("resize", updateContainerWidth);
		};
	}, []);

	const style = {
		padding: "1rem",
		backgroundColor: "transparent",
	};

	const today = new Date().toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	const sContainer = containerWidth < 495;
	const xsContainer = containerWidth < 440;
	const codeString = `
const button = ${sContainer ? `\n` : ""}document.querySelector(button);

const message = {
	name: "John Doe",
	email: "",
	message: "",
	date: "${today}"
};

button.addEventListener${xsContainer ? "\n" : ""}("click", () => {
		form.send(message);
})
`;

	return (
		<div ref={codeContainerRef}>
			<SyntaxHighlighter
				language="javascript"
				showLineNumbers
				style={atomOneDark}
				customStyle={style}
				className="text-sm lg:text-base"
			>
				{codeString}
			</SyntaxHighlighter>
		</div>
	);
};

export default ContactMeCodeSnippet;
