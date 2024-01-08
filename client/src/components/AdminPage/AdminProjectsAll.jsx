import { useFetchProjectsQuery } from "../../services/projectsApiSlice";

import Spinner from "../Spinner";
import AdminProject from "./AdminProject";

const AdminProjectsAll = () => {
	const { data: projects, isLoading } = useFetchProjectsQuery();

	return (
		<div className="flex flex-col gap-6">
			{isLoading && <Spinner />}
			{projects?.map((project) => (
				<AdminProject key={project._id} project={project} />
			))}
		</div>
	);
};

export default AdminProjectsAll;
