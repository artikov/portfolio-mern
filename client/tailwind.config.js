/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				stroke: "#1E2D3D",
				customBackground: "#011627",
				customText: "#607B96",
				secondaryText: "#607B96",
			},
			backgroundImage: {
				bgBlur: "url('/bg-blur.png')",
			},
		},
	},
	plugins: [],
};
