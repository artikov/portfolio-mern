import { ABOUTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const aboutsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		fetchAbouts: builder.query({
			query: () => ({ url: ABOUTS_URL }),
			providesTags: ["About"],
			keepUnusedDataFor: 5,
		}),
	}),
});

export const { useFetchAboutsQuery } = aboutsApiSlice;
