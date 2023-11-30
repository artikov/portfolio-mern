import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./services/githubSlice";
import { apiSlice } from "./services/apiSlice";
import technologiesReducer from "./services/technologiesSlice";
import aboutReducer from "./services/aboutsSlice";
import formDataReducer from "./services/messageSlice";

export const store = configureStore({
	reducer: {
		[githubApi.reducerPath]: githubApi.reducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
		technologies: technologiesReducer,
		about: aboutReducer,
		formData: formDataReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(githubApi.middleware, apiSlice.middleware),
});
