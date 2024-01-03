import { ABOUTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const aboutsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		fetchAbouts: builder.query({
			query: () => ({ url: ABOUTS_URL }),
			providesTags: ["About"],
			keepUnusedDataFor: 5,
		}),
		removeCategory: builder.mutation({
			query: ({ aboutId, categoryId }) => ({
				url: `${ABOUTS_URL}/${aboutId}/remove-category/${categoryId}`,
				method: "DELETE",
				providesTags: ["About"],
			}),
		}),
		removeImage: builder.mutation({
			query: ({ aboutId, imageId }) => ({
				url: `${ABOUTS_URL}/${aboutId}/remove-image/${imageId}`,
				method: "DELETE",
				providesTags: ["About"],
			}),
		}),
	}),
});

export const {
	useFetchAboutsQuery,
	useRemoveCategoryMutation,
	useRemoveImageMutation,
} = aboutsApiSlice;
