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
		removeMessage: builder.mutation({
			query: (id) => ({
				url: `${MESSAGES_URL}/${id}`,
				method: "DELETE",
				providesTags: ["Message"],
			}),
		}),
	}),
});

export const {
	useGetMessagesQuery,
	usePostMessageMutation,
	useRemoveMessageMutation,
} = messagesApiSlice;
