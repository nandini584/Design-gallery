/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				dancingscript: ['Dancing Script', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
