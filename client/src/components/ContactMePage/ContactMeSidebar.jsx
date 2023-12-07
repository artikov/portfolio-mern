import { useState, useEffect } from "react";

import Spinner from "../Spinner";
import Message from "../Message";

import mail from "../../assets/icons/mail.svg";
import phone from "../../assets/icons/phone.svg";
import linkIcon from "../../assets/icons/link.svg";
import Dropdown from "../../assets/icons/dropdown.svg";
import Side from "../../assets/icons/dropdown-side.svg";

import { useMediaQuery } from "react-responsive";

import { useGetContactsQuery } from "../../services/contactsApiSlice";

const ContactMeSidebar = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
	const [isContactsOpen, setIsContactsOpen] = useState(!isMobile);
	const [isLinksOpen, setIsLinksOpen] = useState(!isMobile);

	const { data: contacts, isLoading, error } = useGetContactsQuery();

	let contactDetails = {};
	let links = [];

	const handleToggleAccordion = (type) => {
		if (isMobile) {
			if (type === "contacts") {
				setIsContactsOpen(!isContactsOpen);
			} else if (type === "links") {
				setIsLinksOpen(!isLinksOpen);
			}
		}
	};

	useEffect(() => {
		if (!isMobile) {
			setIsContactsOpen(true);
			setIsLinksOpen(true);
		}
	}, [isMobile]);

	if (!isLoading) {
		contactDetails = contacts[0];
		links = contacts[0].otherLinks;
	}

	if (error) {
		return <Message variant="red">{error.message}</Message>;
	}

	return (
		<div className="flex flex-col gap-2">
			<div>
				<div
					className={`text-white text-sm flex gap-2 p-2.5 bg-slate-800 md:bg-transparent`}
					onClick={() => handleToggleAccordion("contacts")}
				>
					<img src={isContactsOpen ? Dropdown : Side} />
					contacts
				</div>
				<div className={`accordion-content ${isContactsOpen ? "open" : ""}`}>
					<div className={`m-4 text-slate-500 text-sm flex flex-col gap-4 `}>
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
			</div>
			<div>
				<div
					className="text-white text-sm flex gap-2 p-2.5 bg-slate-800 md:bg-transparent"
					onClick={() => handleToggleAccordion("links")}
				>
					<img src={isLinksOpen ? Dropdown : Side} />
					find-me-also
				</div>
				<div className={`accordion-content ${isLinksOpen ? "open" : ""}`}>
					<div className={`m-4 text-slate-500 flex flex-col gap-2 text-sm`}>
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
		</div>
	);
};

export default ContactMeSidebar;
