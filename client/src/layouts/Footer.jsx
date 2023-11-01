const Footer = () => {
	return (
		<footer className="border-t border-slate-800 text-slate-500 absolute bottom-0 w-full">
			<div className="flex justify-between">
				<div className="flex">
					<div className="px-4 py-2 border-r border-slate-800">Find me in:</div>
					<div className="flex">
						<a href="" className="px-4 py-2 border-r border-slate-800">
							X
						</a>
						<a href="" className="px-4 py-2 border-r border-slate-800">
							In
						</a>
						<a href="" className="px-4 py-2 border-r border-slate-800">
							L
						</a>
					</div>
				</div>
				<div className="px-4 py-2 border-l border-slate-800">@artikov</div>
			</div>
		</footer>
	);
};

export default Footer;
