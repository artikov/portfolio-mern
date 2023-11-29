import ContactMeSidebar from "../components/ContactMeSidebar";

const ContactMePage = () => {
	return (
		<div className="flex h-full">
			<div className="border-r border-slate-800 min-w-[238px]">
				<ContactMeSidebar />
			</div>
			<div className="w-full">
				<div className="text-white text-sm border-b border-slate-800">
					<div className="border-r border-slate-800 p-2.5 flex justify-between max-w-[159px]">
						contacts <span className="text-slate-600">x</span>
					</div>
				</div>
				<div className="flex w-full h-full">
					<div className="w-1/2 border-r border-slate-800">Contact Form</div>
					<div className="w-1/2 ">Code snippet</div>
				</div>
			</div>
		</div>
	);
};

export default ContactMePage;
