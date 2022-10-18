/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		extend: {
			colors: {
				Violet: "hsl(257, 40%, 49%)",
				softMagenta: "hsl(300, 69%, 71%)",
			},
			fontFamily: {
				Poppins: "Poppins",
				OpenSans: "Open Sans",
			},
			boxShadow: {
				"3xl": "4px 11px 30px -14px rgba(0,0,0,0.75)",
			},
			backgroundImage: {
				bgDesktop: "url('./images/bg-desktop.svg')",
				bgMobile: "url('./images/bg-mobile.svg')",
			},
		},
	},
	plugins: [],
};
