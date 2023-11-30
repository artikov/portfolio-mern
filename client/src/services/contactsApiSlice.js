import { apiSlice } from "./apiSlice";
import { CONTACTS_URL } from "../constants";

export const contactsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getContacts: builder.query({
			query: () => CONTACTS_URL,
			providesTags: ["Contact"],
			keepUnusedDataFor: 5,
		}),
	}),
});

export const { useGetContactsQuery } = contactsApiSlice;
