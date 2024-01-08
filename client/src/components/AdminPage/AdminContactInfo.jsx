import PropTypes from "prop-types";

const AdminContactInfo = ({ contacts }) => {
	return (
		<div className="flex">
			<div className="mx-auto">
				<p>{contacts.email}</p>
				<p>{contacts.phone}</p>
				<div className="underline flex flex-col">
					{contacts.otherLinks.map((link) => (
						<div
							key={link}
							className="cursor-pointer hover:text-white transition-all duration-300 ease-in-out w-max"
						>
							<a href={link}>{link}</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

AdminContactInfo.propTypes = {
	contacts: PropTypes.object.isRequired,
};

export default AdminContactInfo;
