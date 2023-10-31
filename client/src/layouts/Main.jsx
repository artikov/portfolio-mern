import image from "../assets/bg-blur.png";

const Main = () => {
	return (
		<div className="flex justify-center p-20 mx-20 gap-10 items-center">
			<div className="flex flex-col gap-10 w-1/2">
				<div>
					<p className="text-lg text-slate-200">Hello World. I am</p>
					<h1 className="text-4xl text-slate-200">Oybek Artikov</h1>
					<h2 className="text-2xl text-indigo-600">
						&gt; Full Stack Developer (MERN)
					</h2>
				</div>
				<div className="text-secondaryText text-md">
					<p>&#47;&#47; 3 years of experience</p>
					<p>&#47;&#47; 10+ projects</p>
				</div>
			</div>
			<img src={image} alt="" className="absolute w-3/4 right-10 top-10" />
			<div className="w-1/2 border">block</div>
		</div>
	);
};

export default Main;
