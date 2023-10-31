const Header = () => {
	return (
		<header className="border-b border-stroke">
			<nav className="mx-auto flex items-center justify-between p-2 text-customText">
				<div className="flex lg:flex-1">
					<a href="#" className="text-sm font-semibold leading-6 ">
						Oybek Artikov
					</a>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					<a href="#" className="text-sm font-semibold leading-6 ">
						_home
					</a>
					<a href="#" className="text-sm font-semibold leading-6 ">
						_about-me
					</a>
					<a href="#" className="text-sm font-semibold leading-6 ">
						_projects
					</a>
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a href="#" className="text-sm font-semibold leading-6 ">
						_contact-me
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Header;
