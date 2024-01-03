import {
	useRemoveCategoryMutation,
	useRemoveImageMutation,
} from "../../services/aboutsApiSlice";

import PropTypes from "prop-types";
import Spinner from "../Spinner";

const AdminAbout = ({ about, refetch }) => {
	const [removeCategory, { isLoading }] = useRemoveCategoryMutation();
	const [removeImage, { isLoading: imageRemoving }] = useRemoveImageMutation();

	const aboutId = about._id;

	const handleRemoveCategory = async (categoryId) => {
		try {
			await removeCategory({ aboutId, categoryId });
			refetch();
		} catch (error) {
			console.error(error);
		}
	};

	const handleRemoveImage = async (imageId) => {
		try {
			await removeImage({ aboutId, imageId });
			refetch();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="p-2">
			<h1 className="text-white underline text-center">{about?.title}</h1>
			{isLoading ? (
				<Spinner />
			) : (
				<div>
					{about?.categories?.map((category) => (
						<div key={category._id} className="relative">
							<h1 className="text-white">{category.category}</h1>
							<p>{category.content}</p>
							<button
								className="absolute right-0 top-0 bg-red-900 px-2 py-1 rounded text-white hover:bg-red-500 transition-all"
								onClick={() => handleRemoveCategory(category._id)}
							>
								x
							</button>
						</div>
					))}
				</div>
			)}
			{imageRemoving ? (
				<Spinner />
			) : (
				<div className="grid grid-flow-row md:grid-flow-col py-4">
					{about?.images?.map((image) => (
						<div
							key={image._id}
							className="flex flex-col items-center relative"
						>
							<img
								src={image.image}
								alt={image.caption}
								className="w-[200px]"
							/>
							<p>{image.caption}</p>
							<button
								className="absolute right-0 top-0 bg-red-900 px-2 py-1 rounded text-white hover:bg-red-500 transition-all"
								onClick={() => handleRemoveImage(image._id)}
							>
								X
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

AdminAbout.propTypes = {
	about: PropTypes.object.isRequired,
	refetch: PropTypes.func.isRequired,
};

export default AdminAbout;
