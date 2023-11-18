import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./services/githubSlice";
import { apiSlice } from "./services/apiSlice";
import technologiesReducer from "./services/technologiesSlice";
import aboutReducer from "./services/aboutsSlice";

export const store = configureStore({
	reducer: {
		[githubApi.reducerPath]: githubApi.reducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
		technologies: technologiesReducer,
		about: aboutReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(githubApi.middleware, apiSlice.middleware),
});
