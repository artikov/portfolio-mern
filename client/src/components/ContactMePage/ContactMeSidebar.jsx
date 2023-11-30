import Spinner from "../Spinner";
import Message from "../Message";

import mail from "../../assets/icons/mail.svg";
import phone from "../../assets/icons/phone.svg";
import linkIcon from "../../assets/icons/link.svg";
import dropdown from "../../assets/icons/dropdown.svg";

import { useGetContactsQuery } from "../../services/contactsApiSlice";

const ContactMeSidebar = () => {
	const { data: contacts, isLoading, error } = useGetContactsQuery();

	let contactDetails = {};
	let links = [];
	if (!isLoading) {
		contactDetails = contacts[0];
		links = contacts[0].otherLinks;
	}

	if (error) {
		return <Message variant="red">{error.message}</Message>;
	}

	return (
		<div>
			<div>
				<div className="text-white text-sm flex gap-2 p-2.5 border-b border-slate-800">
					<img src={dropdown} />
					contacts
				</div>
				<div className="m-4 text-slate-500 text-sm flex flex-col gap-4">
					{isLoading ? (
						<Spinner />
					) : (
						<>
							<a
								href={`mailto:${contactDetails.email}`}
								className="flex gap-2 cursor-pointer hover:text-white transition-all"
							>
								<img src={mail} alt="Mail Icon" />
								{contactDetails.email}
							</a>

							<a
								href={`tel:${contactDetails.phone}`}
								className="flex gap-2 hover:text-white transition-all cursor-pointer"
							>
								<img src={phone} />
								{contactDetails.phone}
							</a>
						</>
					)}
				</div>
			</div>
			<div>
				<div className="text-white text-sm flex gap-2 p-2.5 border-b border-t border-slate-800">
					<img src={dropdown} />
					find-me-also
				</div>
				<div className="m-4 text-slate-500 flex flex-col gap-2 text-sm">
					{links?.map((link) => (
						<a
							href={link}
							key={link}
							className="flex gap-2 hover:text-white transition-all"
							target="_blank"
							rel="noreferrer"
						>
							<img src={linkIcon} />
							{link}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default ContactMeSidebar;
