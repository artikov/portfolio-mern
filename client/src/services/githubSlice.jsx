import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
	// reducerPath: "githubApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.github.com/",
	}),
	endpoints: (builder) => ({
		getGists: builder.query({
			query: (gistId) => `gists/${gistId}`,
		}),
	}),
});

export const { useGetGistsQuery } = githubApi;
