import { NavLink } from "react-router-dom";

const Header = () => {
	const navDefault =
		"text-sm font-semibold leading-6 px-4 py-2 border-r border-slate-800 hover:bg-slate-800 hover:text-white";
	const navActive = navDefault + " border-b-2 border-b-orange-300 text-white";

	return (
		<header className="border-b border-slate-800 top-0 absolute w-full">
			<nav className="mx-auto flex items-center justify-between text-slate-500">
				<div className="flex lg:flex-1">
					<NavLink
						to={`/`}
						className="text-sm font-semibold leading-6 pr-28 p-2 border-r border-slate-800 hover:bg-slate-800"
					>
						Oybek Artikov
					</NavLink>
					<div className="hidden lg:flex">
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
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
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
