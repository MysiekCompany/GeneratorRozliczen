/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}', './*.{html,js}'],
	theme: {
		extend: {
			flex: {
				2: '2',
			},
		},
	},
	plugins: [],
}
