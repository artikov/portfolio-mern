import ContactMeCodeSnippet from "../components/ContactMePage/ContactMeCodeSnippet";
import ContactMeForm from "../components/ContactMePage/ContactMeForm";
import ContactMeSidebar from "../components/ContactMePage/ContactMeSidebar";

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
				<div className="flex flex-col lg:flex-row w-full h-full overflow-auto ">
					<div className="md:border-b lg:border-r lg:w-1/2 border-slate-800">
						<ContactMeForm />
					</div>
					<div className="hidden sm:block lg:w-1/2 xl:mt-12">
						<ContactMeCodeSnippet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactMePage;
