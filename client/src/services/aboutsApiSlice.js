import { ABOUTS_URL, UPLOAD_URL } from "../constants";
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
			}),
			invalidatesTags: ["About"],
		}),

		removeImage: builder.mutation({
			query: ({ aboutId, imageId }) => ({
				url: `${ABOUTS_URL}/${aboutId}/remove-image/${imageId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["About"],
		}),

		addCategory: builder.mutation({
			query: ({ aboutId, category, content }) => ({
				url: `${ABOUTS_URL}/add-category/${aboutId}`,
				method: "PATCH",
				body: { category, content },
			}),
			invalidatesTags: ["About"],
		}),

		uploadImage: builder.mutation({
			query: (formData) => ({
				url: `${UPLOAD_URL}`,
				method: "POST",
				body: formData,
			}),
		}),

		addImage: builder.mutation({
			query: ({ aboutId, image, caption }) => ({
				url: `${ABOUTS_URL}/add-image/${aboutId}`,
				method: "PATCH",
				body: { image, caption },
			}),
			invalidatesTags: ["About"],
		}),
	}),
});

export const {
	useFetchAboutsQuery,
	useRemoveCategoryMutation,
	useRemoveImageMutation,
	useAddCategoryMutation,
	useUploadImageMutation,
	useAddImageMutation,
} = aboutsApiSlice;
