import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GITHUB_API_URL } from "../constants";

export const githubApi = createApi({
	reducerPath: "githubApi",
	baseQuery: fetchBaseQuery({
		baseUrl: GITHUB_API_URL,
	}),
	endpoints: (builder) => ({
		getGists: builder.query({
			query: (gistId) => `/gists/${gistId}`,
		}),
	}),
	keepUnusedDataFor: 5,
});

export const { useGetGistsQuery } = githubApi;
