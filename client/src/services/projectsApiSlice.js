import { PROJECTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const projectsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		fetchProjects: builder.query({
			query: () => ({ url: PROJECTS_URL }),
			providesTags: ["Project"],
			keepUnusedDataFor: 5,
		}),
	}),
});

export const { useFetchProjectsQuery } = projectsApiSlice;
