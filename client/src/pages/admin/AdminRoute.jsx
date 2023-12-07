import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";

const AdminRoute = () => {
	// const { userInfo } = useSelector((state) => state.auth);

	const userInfo = true;
	return userInfo ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;
