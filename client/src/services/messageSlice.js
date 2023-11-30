import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
	name: "formData",
	initialState: {
		formData: {
			name: "",
			email: "",
			message: "",
		},
	},
	reducers: {
		setFormData: (state, action) => {
			state.formData = action.payload;
		},
		resetFormData: (state) => {
			state.formData = {
				name: "",
				email: "",
				message: "",
			};
		},
	},
});

export const { setFormData, resetFormData } = messageSlice.actions;

export const selectFormData = (state) => state.formData.formData;

export default messageSlice.reducer;
