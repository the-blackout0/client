/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			backgroundColor: {
				primary: '#06FC99',
				secondary: '#121212',
				dark: '#1F1F1F',
				darker: '#0D0D0D',
				lighter: '#2F2F2F',
			},
			textColor: {
				primary: '#06FC99',
				secondary: '#FFFFFF',
			},
			borderColor: {
				primary: '#06FC99',
				secondary: '#FFFFFF',
			},
			boxShadow: {
				'inner-dark': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
