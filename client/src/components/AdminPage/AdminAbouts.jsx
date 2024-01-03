import { useState } from "react";

import AdminAbout from "./AdminAbout";
import AdminAboutsCatForm from "./AdminAboutsCatForm";
import AdminAboutsImgForm from "./AdminAboutsImgForm";
import Spinner from "../Spinner";

import { useFetchAboutsQuery } from "../../services/aboutsApiSlice";

const AdminAbouts = () => {
	const [category, setCategory] = useState("Personal-Info");

	const handleCategoryChange = (e) => {
		setCategory(e.target.value);
	};

	const { data: abouts, isLoading, error, refetch } = useFetchAboutsQuery();

	const about = abouts?.find((about) => about?.title === category);
	const aboutId = about?._id;

	if (error) console.log(error);

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-2 mx-auto items-center">
				<label htmlFor="category">Category:</label>
				<select
					id="category"
					name="category"
					className="bg-slate-950 border border-slate-800 rounded-md p-1
						focus:outline-none focus:ring-1 focus:ring-slate-700"
					value={category}
					onChange={handleCategoryChange}
				>
					<option value="Personal-Info">Personal Info</option>
					<option value="Professional-Info">Professional Info</option>
					<option value="Hobbies">Hobbies</option>
				</select>
			</div>

			{isLoading ? (
				<Spinner />
			) : (
				<>
					<div className="flex flex-col gap-2 justify-around mx-2 lg:mx-10 ">
						<AdminAboutsCatForm aboutId={aboutId} />
						<AdminAboutsImgForm />
					</div>

					<hr className="border-slate-800 my-2" />

					<div className="flex flex-wrap justify-between gap-4">
						<AdminAbout about={about} refetch={refetch} />
					</div>
				</>
			)}
		</div>
	);
};

export default AdminAbouts;
