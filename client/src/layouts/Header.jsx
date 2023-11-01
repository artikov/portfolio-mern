const Header = () => {
	return (
		<header className="border-b border-slate-800 top-0 absolute w-full">
			<nav className="mx-auto flex items-center justify-between text-slate-500">
				<div className="flex lg:flex-1">
					<a
						href="#"
						className="text-sm font-semibold leading-6 pr-28 p-2 border-r border-slate-800"
					>
						Oybek Artikov
					</a>
					<div className="hidden lg:flex">
						<a
							href="#"
							className="text-sm font-semibold leading-6 px-4 py-2 border-r border-slate-800"
						>
							_home
						</a>
						<a
							href="#"
							className="text-sm font-semibold leading-6 px-4 py-2 border-r border-slate-800"
						>
							_about-me
						</a>
						<a
							href="#"
							className="text-sm font-semibold leading-6 px-4 py-2 border-r border-slate-800"
						>
							_projects
						</a>
					</div>
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a
						href="#"
						className="text-sm font-semibold leading-6 px-4 py-2 border-l border-slate-800"
					>
						_contact-me
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Header;
