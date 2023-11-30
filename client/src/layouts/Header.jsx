import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const navDefault =
		"text-sm leading-6 px-4 py-2 md:border-r border-slate-800 hover:bg-slate-800 hover:text-white hover:ease-in-out duration-300";
	const navActive = navDefault + " border-b border-b-orange-300 text-white";

	return (
		<header className="border-b border-slate-800 top-0 absolute w-full bg-slate-900 md:bg-transparent">
			<nav className="text-slate-500 flex flex-col md:flex-row ">
				<NavLink
					to={`/`}
					className={
						navDefault + " w-full md:w-auto pr-32 p-2 border-r-0 md:border-r"
					}
				>
					Oybek Artikov
				</NavLink>

				{/* MOBILE NAVIGATION BUTTON */}
				<div className="md:hidden border-l border-slate-800">
					<button className="px-4 py-2" onClick={toggleMenu}>
						Menu
					</button>
				</div>

				<div
					className={`md:flex ${
						menuOpen ? "flex flex-col" : "md:flex-row hidden"
					}`}
				>
					<NavLink
						to={`/`}
						className={({ isActive }) => (isActive ? navActive : navDefault)}
					>
						_home
					</NavLink>
					<NavLink
						to={`about`}
						className={({ isActive }) => (isActive ? navActive : navDefault)}
					>
						_about
					</NavLink>
					<NavLink
						to={`projects`}
						className={({ isActive }) => (isActive ? navActive : navDefault)}
					>
						_projects
					</NavLink>
				</div>
				<div className={`md:ml-auto md:flex ${menuOpen ? "block" : "hidden"}`}>
					<NavLink
						to={`contact`}
						className={({ isActive }) =>
							isActive
								? navActive + " md:border-l-2"
								: navDefault + " md:border-l-2"
						}
					>
						_contact
					</NavLink>
				</div>
			</nav>
		</header>
	);
};

export default Header;
