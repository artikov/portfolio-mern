import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const apiSlice = createApi({
	reducerPath: "apiSlice",
	baseQuery: fetchBaseQuery({
		baseUrl: "",
	}),
	tagTypes: ["About", "User", "Project", "Certificate", "Contact"],
	endpoints: (builder) => ({}),
});
