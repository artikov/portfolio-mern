import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./services/githubSlice";
import { apiSlice } from "./services/apiSlice";

export const store = configureStore({
	reducer: {
		[githubApi.reducerPath]: githubApi.reducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(githubApi.middleware, apiSlice.middleware),
});
