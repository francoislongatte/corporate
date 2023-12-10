/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{html,ts,md}', 'node_modules/preline/dist/*.js'],
	darkMode: 'class',
	theme: {
		container: {
			screens: {
				sm: '640px',
				md: '768px'
			},
			center: true
		},
		fontFamily: {
			sans: ['"Inter", sans-serif']
		},
		extend: {
			keyframes: {
				scroll: {
					'0%': { transform: 'translateX(calc( -100% - 24px ))' },
					'100%': { transform: 'translateX(calc( -400% - 24px * 4 ))' }
				}
			},
			animation: {
				carousel: 'scroll 75s linear infinite'
			},
			textUnderlineOffset: {
				16: '16px'
			},
			padding: {
				'1/2': '50%',
				full: '100%'
			}
		}
	},
	plugins: [require('@tailwindcss/forms'), require('preline/plugin'), 'prettier-plugin-tailwindcss']
}
