import PropTypes from "prop-types";

const AdminMessage = ({ message }) => {
	const createdDate = new Date(message.createdAt).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<div className="bg-slate-800 p-1 md:p-4 rounded-md flex gap-2 text-xs md:text-base overflow-auto">
			<div className="bg-slate-900 p-4 rounded-lg w-1/2">
				<h1 className="">{message.message}</h1>
			</div>
			<div className="p-1 md:p-4 flex flex-col gap-2">
				<h1 className="md:text-lg text-white">{message.name}</h1>
				<p>{message.email}</p>
				<p>{createdDate}</p>
			</div>
		</div>
	);
};

AdminMessage.propTypes = {
	message: PropTypes.object.isRequired,
};

export default AdminMessage;
