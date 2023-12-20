import PropTypes from "prop-types";

import { useRemoveMessageMutation } from "../../services/messagesApiSlice";

const AdminMessage = ({ message, refetch }) => {
	const createdDate = new Date(message.createdAt).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	const [removeMessage, { isLoading }] = useRemoveMessageMutation();

	const handleRemoveMessage = async () => {
		try {
			await removeMessage(message._id);
			refetch();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="bg-slate-800 p-1 md:p-4 rounded-md flex gap-2 text-xs md:text-base overflow-auto relative">
			{isLoading && (
				<div className="absolute bg-slate-800/60 rounded w-full h-full text-center">
					Deleting...
				</div>
			)}
			<div className="bg-slate-900 p-4 rounded-lg w-1/2">
				<h1 className="">{message.message}</h1>
			</div>
			<div className="p-1 md:p-4 flex flex-col gap-2">
				<h1 className="md:text-lg text-white">{message.name}</h1>
				<p>{message.email}</p>
				<p>{createdDate}</p>
			</div>
			<button
				className="absolute right-0 top-0 bg-red-900 px-4 py-2 rounded text-white hover:bg-red-500 transition-all"
				onClick={handleRemoveMessage}
			>
				X
			</button>
		</div>
	);
};

AdminMessage.propTypes = {
	message: PropTypes.object.isRequired,
	refetch: PropTypes.func.isRequired,
};

export default AdminMessage;
