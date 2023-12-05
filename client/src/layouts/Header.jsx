import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

import Hamburger from "../components/Hamburger";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	// Handle navigation menu status on window resize
	useEffect(() => {
		const updateIfNotMobile = () => {
			if (!isMobile) {
				setMenuOpen(false);
			}
		};

		updateIfNotMobile();

		window.addEventListener("resize", updateIfNotMobile);

		return () => {
			window.removeEventListener("resize", updateIfNotMobile);
		};
	}, [isMobile]);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const navDefault =
		"text-sm leading-6 px-4 py-2 md:border-r border-slate-800 hover:bg-slate-800 hover:text-white hover:ease-in-out duration-300";
	const navActive = navDefault + " border-b border-b-orange-300 text-white";

	return (
		<header
			className={`border-b border-slate-800 top-0 absolute w-full bg-slate-900 md:bg-transparent z-10 h-full ${
				menuOpen ? "nav-open" : "nav-closed"
			}`}
		>
			<nav
				className={`text-slate-500 flex flex-col md:flex-row justify-between ${
					!menuOpen && "border-b border-slate-800"
				}`}
			>
				<div className="flex">
					<NavLink
						to={`/`}
						className={
							navDefault +
							" w-full md:w-auto md:pr-28 p-2 border-r-0 md:border-r"
						}
						onClick={() => setMenuOpen(false)}
					>
						Oybek Artikov
					</NavLink>

					{/* MOBILE NAVIGATION BUTTON */}
					<div className="md:hidden border-l border-slate-800 px-4 py-2">
						<Hamburger isOpen={menuOpen} toggleMenu={toggleMenu} />
					</div>
				</div>

				<div
					className={`md:flex border-t border-slate-800 md:border-none ${
						menuOpen ? "flex flex-col" : "md:flex-row hidden"
					}`}
				>
					<NavLink
						to={`/`}
						className={({ isActive }) => (isActive ? navActive : navDefault)}
						onClick={() => setMenuOpen(false)}
					>
						_home
					</NavLink>
					<NavLink
						to={`about`}
						className={({ isActive }) => (isActive ? navActive : navDefault)}
						onClick={() => setMenuOpen(false)}
					>
						_about
					</NavLink>
					<NavLink
						to={`projects`}
						className={({ isActive }) => (isActive ? navActive : navDefault)}
						onClick={() => setMenuOpen(false)}
					>
						_projects
					</NavLink>
				</div>
				<div
					className={`md:ml-auto md:flex md:pb-0 pb-4 ${
						menuOpen ? "flex" : "hidden"
					}`}
				>
					<NavLink
						to={`contact`}
						className={({ isActive }) =>
							isActive
								? navActive + " md:border-l-2 w-full"
								: navDefault + " md:border-l-2 w-full"
						}
						onClick={() => setMenuOpen(false)}
					>
						_contact
					</NavLink>
				</div>
			</nav>
		</header>
	);
};

export default Header;
