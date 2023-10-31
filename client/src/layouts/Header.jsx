const Header = () => {
	return (
		<header className="bg-white">
			<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
				<div className="flex lg:flex-1">
					<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
						Oybek Artikov
					</a>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
						_home
					</a>
					<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
						_about-me
					</a>
					<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
						_projects
					</a>
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
						_contact-me
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Header;
