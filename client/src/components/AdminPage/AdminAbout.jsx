import PropTypes from "prop-types";

const AdminAbout = ({ about }) => {
	return (
		<div className="p-2">
			<h1 className="text-white underline text-center">{about?.title}</h1>
			<div>
				{about?.categories?.map((category) => (
					<div key={category._id}>
						<h1 className="text-white">{category.category}</h1>
						<p>{category.content}</p>
					</div>
				))}
			</div>
			<div className="grid grid-flow-row md:grid-flow-col py-4">
				{about?.images?.map((image) => (
					<div key={image._id} className="flex flex-col items-center">
						<img src={image.image} alt={image.caption} className="w-[200px]" />
						<p>{image.caption}</p>
					</div>
				))}
			</div>
		</div>
	);
};

AdminAbout.propTypes = {
	about: PropTypes.object.isRequired,
};

export default AdminAbout;
