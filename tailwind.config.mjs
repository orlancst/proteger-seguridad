/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],

	theme: {
		extend: {
			fontFamily: {
				"montserrat": ["Montserrat, sans-serif"],
			},
			backgroundImage: {
				"heroBackground": "url('/src/assets/imgs/car1.jpg')",
			},
		},
	},
	plugins: [
		require('tailwindcss-animated'),
		require('flowbite/plugin')
	],
}
