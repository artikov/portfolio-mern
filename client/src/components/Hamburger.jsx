import PropTypes from "prop-types";

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
	return (
		<div className="flex items-center transition-opacity duration-600 ease-in-out">
			<button
				className={`text-gray-600 focus:outline-none md:hidden transition-transform duration-500 ease-in-out transform ${
					isOpen ? "rotate-180 -translate-x-1" : ""
				}`}
				onClick={toggleMenu}
			>
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
					></path>
				</svg>
			</button>
		</div>
	);
};

HamburgerMenu.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	toggleMenu: PropTypes.func.isRequired,
};

export default HamburgerMenu;
