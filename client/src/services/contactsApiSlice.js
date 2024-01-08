import { apiSlice } from "./apiSlice";
import { CONTACTS_URL } from "../constants";

export const contactsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getContacts: builder.query({
			query: () => CONTACTS_URL,
			providesTags: ["Contact"],
			keepUnusedDataFor: 5,
		}),
		updateContacts: builder.mutation({
			query: ({ id, email, phone, links }) => ({
				url: `${CONTACTS_URL}/${id}`,
				method: "PUT",
				body: { email, phone, links },
			}),
			invalidatesTags: ["Contact"],
		}),
	}),
});

export const { useGetContactsQuery, useUpdateContactsMutation } =
	contactsApiSlice;
