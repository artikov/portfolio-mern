import { useState } from "react";

import AdminMain from "../../components/AdminPage/AdminMain";
import AdminSidebar from "../../components/AdminPage/AdminSidebar";

const AdminPage = () => {
	const [selectedComponent, setSelectedComponent] = useState("messages");

	const handleComponentChange = (component) => {
		setSelectedComponent(component);
	};

	return (
		<div className="flex flex-col md:flex-row h-full text-slate-500">
			<div className="border-r border-slate-800 min-w-[238px] p-4">
				<AdminSidebar
					selectedComponent={selectedComponent}
					handleComponentChange={handleComponentChange}
				/>
			</div>
			<div className="w-full md:p-4 overflow-auto">
				<AdminMain selectedComponent={selectedComponent} />
			</div>
		</div>
	);
};

export default AdminPage;
