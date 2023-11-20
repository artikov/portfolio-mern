import PropTypes from "prop-types";

const CodeComment = ({ lines }) => {
	return (
		<div className="w-16">
			{lines.map((item) => (
				<div key={item} className="flex gap-4 mr-4">
					{item === 0 ? (
						<>
							<span>{item + 1}</span>
							<span>&#47;&#42;&#42;</span>
						</>
					) : item === lines.length - 1 ? (
						<>
							<span>{item + 1}</span>
							<span className="ml-2.5">&#42;&#47;</span>
						</>
					) : (
						<>
							<span>{item + 1}</span>
							<span className="ml-2.5">&#42;</span>
						</>
					)}
				</div>
			))}
		</div>
	);
};

CodeComment.propTypes = {
	lines: PropTypes.array.isRequired,
};

export default CodeComment;
