import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import CustomContainer from "./layouts/CustomContainer";
import { Outlet } from "react-router-dom";

const App = () => {
	return (
		<div className="">
			<CustomContainer>
				<Header />
				<Outlet />
				<Footer />
			</CustomContainer>
		</div>
	);
};

export default App;
