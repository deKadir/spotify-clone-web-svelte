/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				backdrop: '#121212',
				primary: '#1db954',
				active: '#282828',
				link: '#b3b3b3',
				footer: '#181818'
			}
		},
		borderWidth: {
			DEFAULT: '1px'
		}
	},
	plugins: [
		require('@tailwindcss/line-clamp'),
		require('tailwind-scrollbar')({ nocompatible: true })
	]
};
