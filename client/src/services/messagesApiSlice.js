import { MESSAGES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const messagesApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getMessages: builder.query({
			query: () => ({
				url: MESSAGES_URL,
				providesTags: ["Message"],
				keepUnusedDataFor: 5,
			}),
		}),
		postMessage: builder.mutation({
			query: (body) => ({
				url: MESSAGES_URL,
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useGetMessagesQuery, usePostMessageMutation } = messagesApiSlice;
