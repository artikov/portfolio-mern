import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
	const { userInfo } = useSelector((state) => state.auth);

	return userInfo?.isAdmin ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;
