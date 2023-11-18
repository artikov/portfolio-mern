import { createSlice } from "@reduxjs/toolkit";

export const aboutsSlice = createSlice({
	name: "abouts",
	initialState: {
		selectedCategory: null,
		selectedSubCategory: null,
	},
	reducers: {
		setSelectedCategory: (state, action) => {
			state.selectedCategory = action.payload;
		},
		setSelectedSubCategory: (state, action) => {
			state.selectedSubCategory = action.payload;
		},
	},
});

export const { setSelectedCategory, setSelectedSubCategory } =
	aboutsSlice.actions;
export default aboutsSlice.reducer;
