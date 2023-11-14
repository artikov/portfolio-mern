import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import CustomContainer from "./layouts/CustomContainer";
import { Outlet } from "react-router-dom";

const App = () => {
	return (
		<CustomContainer>
			<Header />
			<div className="py-10 h-full">
				<Outlet />
			</div>
			<Footer />
		</CustomContainer>
	);
};

export default App;
