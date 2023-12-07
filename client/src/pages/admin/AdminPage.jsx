import AdminMain from "../../components/AdminPage/AdminMain";
import AdminSidebar from "../../components/AdminPage/AdminSidebar";

const AdminPage = () => {
	return (
		<div className="flex h-full text-slate-500">
			<div className="border-r border-slate-800 min-w-[238px] p-4">
				<AdminSidebar />
			</div>
			<div className="w-full p-4">
				<AdminMain />
			</div>
		</div>
	);
};

export default AdminPage;
