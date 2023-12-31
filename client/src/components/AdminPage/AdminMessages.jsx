import AdminMessage from "./AdminMessage";
import Spinner from "../Spinner";

import { useGetMessagesQuery } from "../../services/messagesApiSlice";

const AdminMessages = () => {
	const { data: messages, isLoading, refetch } = useGetMessagesQuery();

	return (
		<div>
			{isLoading ? (
				<Spinner />
			) : (
				<div className="flex flex-col gap-2">
					{messages.map((message) => (
						<AdminMessage
							key={message._id}
							message={message}
							refetch={refetch}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default AdminMessages;
