/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./index.html', './src/**/*.{html,ts,md}', 'node_modules/preline/dist/*.js'],
	darkMode: 'class',
	theme: {
		colors: {
			transparent: 'transparent',
      		current: 'currentColor',
			'stone': colors.stone,
			'orange': {
				50: '#FFFEFC',
				100: '#FFF0E0',
        		200: '#FFD5A8',
        		300: '#FFBA70',
        		400: '#FF9F38',
        		500: '#FF8400',
				600: '#C76700',
				700: '#8F4A00',
				800: '#572D00',
				900: '#1F1000',
				950: '#030100'
			}
		},
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
