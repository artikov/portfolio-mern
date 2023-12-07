import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactMePage from "./pages/ContactMePage";
import AdminPage from "./pages/admin/AdminPage.jsx";
import AdminRoute from "./pages/admin/AdminRoute.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store.js";
import { Provider } from "react-redux";

import "aos/dist/aos.css";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "about",
				element: <AboutMePage />,
			},
			{
				path: "projects",
				element: <ProjectsPage />,
			},
			{
				path: "contact",
				element: <ContactMePage />,
			},
			{
				path: "login",
				element: <AdminLogin />,
			},
			{
				path: "admin",
				element: <AdminRoute />,
				children: [
					{
						path: "",
						element: <AdminPage />,
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
