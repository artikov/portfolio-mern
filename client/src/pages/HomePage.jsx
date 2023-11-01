const HomePage = () => {
	return (
		<div className="flex justify-center px-10 lg:px-60 gap-5 items-center h-full">
			<div className="flex flex-col gap-14 lg:w-1/2 z-10">
				<div>
					<p className="text-lg text-slate-200">Hello World. I am</p>
					<h1 className="text-5xl text-slate-200">Oybek Artikov</h1>
					<h2 className="text-2xl text-indigo-600">
						&gt; Full Stack Developer (MERN)
					</h2>
				</div>
				<div className="text-md">
					<div className="text-slate-500 text-md">
						<p>&#47;&#47; 3 years of experience</p>
						<p>&#47;&#47; +20 projects worldwide</p>
					</div>
					<div>
						<span className="text-indigo-600">const </span>
						<span className="text-emerald-400">githubLink</span>{" "}
						<span className="text-white">= </span>{" "}
						<a
							href="https://github.com/artikov"
							className="text-rose-400"
							target="_blank"
							rel="noreferrer"
						>
							&quot;<u>https://github.com/artikov</u>&quot;
						</a>
					</div>
				</div>
			</div>
			<div className="hidden lg:w-1/2 h-full z-10 lg:flex flex-col justify-center">
				<div className="h-1/3 bg-custom-transparent rounded-lg">content</div>
			</div>
			<div className="absolute sm:w-[454px] sm:h-[492px] sm:bottom-14 sm:right-10 gradient-background-indigo -z-10"></div>
			<div className="absolute sm:w-[454px] sm:h-[492px] sm:top-24 sm:right-1/4 gradient-background-emerlad -z-10"></div>
		</div>
	);
};

export default HomePage;
