import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
	const footerDefault =
		"px-4 py-2 border-r border-slate-800 hover:bg-slate-800 hover:text-white flex items-center hover:ease-in-out duration-300";

	return (
		<footer className="border-t border-slate-800 text-slate-500 absolute bottom-0 w-full">
			<div className="flex justify-between">
				<div className="flex">
					<div className="px-4 py-2 border-r border-slate-800">Find me in:</div>
					<div className="flex">
						<Link
							to={"https://x.com/artikov08"}
							className={footerDefault}
							target="_blank"
						>
							<FaXTwitter />
						</Link>
						<Link
							to={"https://instagram.com/artikxv"}
							className={footerDefault}
							target="_blank"
						>
							<FaInstagram />
						</Link>
						<Link
							to={"https://www.linkedin.com/in/artikov/"}
							className={footerDefault}
							target="_blank"
						>
							<FaLinkedin />
						</Link>
					</div>
				</div>
				<Link
					to={"https://github.com/artikov"}
					className={footerDefault + " border-l-2  gap-5"}
					target="_blank"
				>
					@artikov
					<FaGithub />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
