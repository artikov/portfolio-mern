import { NavLink } from "react-router-dom";

const Header = () => {
	const navDefault =
		"text-sm  leading-6 px-4 py-2 border-r border-slate-800 hover:bg-slate-800 hover:text-white hover:ease-in-out duration-300";
	const navActive = navDefault + " border-b border-b-orange-300 text-white";

	return (
		<header className="border-b border-slate-800 top-0 absolute w-full">
			<nav className="mx-auto flex items-center justify-between text-slate-500">
				<div className="flex md:flex-1">
					<NavLink
						to={`/`}
						className={navDefault + " pr-28 p-2 border-r-0 md:border-r"}
					>
						Oybek Artikov
					</NavLink>
					<div className="hidden md:flex">
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
					<div className="hidden md:flex md:flex-1 md:justify-end">
						<NavLink
							to={`contact`}
							className={({ isActive }) =>
								isActive
									? navActive + " border-l-2"
									: navDefault + " border-l-2"
							}
						>
							_contact
						</NavLink>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
``;
