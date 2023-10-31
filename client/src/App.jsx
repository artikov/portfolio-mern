import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import CustomContainer from "./layouts/CustomContainer";

const App = () => {
	return (
		<div className="">
			<CustomContainer>
				<Header />
				<Main />
				<Footer />
			</CustomContainer>
		</div>
	);
};

export default App;
