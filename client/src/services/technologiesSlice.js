import { createSlice } from "@reduxjs/toolkit";

const technologiesSlice = createSlice({
	name: "technologies",
	initialState: {
		selectedTechnologies: [],
	},
	reducers: {
		toggleTechnology: (state, action) => {
			const technology = action.payload;

			if (state.selectedTechnologies.includes(technology)) {
				state.selectedTechnologies = state.selectedTechnologies.filter(
					(tech) => tech !== technology
				);
			} else {
				state.selectedTechnologies.push(technology);
			}
		},
		clearSelectedTechnologies: (state) => {
			state.selectedTechnologies = [];
		},
	},
});

export const { toggleTechnology, clearSelectedTechnologies } =
	technologiesSlice.actions;

export default technologiesSlice.reducer;
