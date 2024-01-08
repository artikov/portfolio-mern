import { PROJECTS_URL, UPLOAD_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const projectsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		fetchProjects: builder.query({
			query: () => ({ url: PROJECTS_URL }),
			providesTags: ["Project"],
			keepUnusedDataFor: 5,
		}),

		uploadImage: builder.mutation({
			query: (formData) => ({
				url: `${UPLOAD_URL}`,
				method: "POST",
				body: formData,
			}),
		}),

		createProject: builder.mutation({
			query: (formData) => ({
				url: PROJECTS_URL,
				method: "POST",
				body: formData,
			}),
			invalidatesTags: ["Project"],
		}),

		deleteProject: builder.mutation({
			query: (projectId) => ({
				url: `${PROJECTS_URL}/${projectId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Project"],
		}),
	}),
});

export const {
	useFetchProjectsQuery,
	useCreateProjectMutation,
	useDeleteProjectMutation,
	useUploadImageMutation,
} = projectsApiSlice;
