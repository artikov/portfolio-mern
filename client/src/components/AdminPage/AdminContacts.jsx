import AdminContactsForm from "./AdminContactsForm";
import AdminContactInfo from "./AdminContactInfo";
import Spinner from "../Spinner";

import { useGetContactsQuery } from "../../services/contactsApiSlice";

const AdminContacts = () => {
	const { data: contacts, isLoading } = useGetContactsQuery();

	return (
		<div>
			{isLoading ? (
				<Spinner />
			) : (
				<div>
					<AdminContactsForm contactId={contacts[0]._id} />
					<hr className="border-slate-800 my-2" />
					<AdminContactInfo contacts={contacts[0]} />
				</div>
			)}
		</div>
	);
};

export default AdminContacts;
