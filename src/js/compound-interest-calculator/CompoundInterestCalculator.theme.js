import { em, rem } from '@mantine/styles';

export const compoundInterestCalculatorTheme = {
	colorScheme: 'light',
	globalStyles: theme => ( {
		html: {
			fontSize: '100%' // fixes rem scale (1rem = 16px)
		}
	} ),
	breakpoints: {
		// Bootstrap 3.x.x
		xs: `${em(768)}`,
		sm: `${em(768)}`,
		md: `${em(992)}`,
		lg: `${em(1200)}`
	},
	components: {
		Grid: {
			defaultProps: {
				mt: 0,
				mb: 0
			}
		},
		GridCol: {
			defaultProps: {
				pt: 0,
				pb: 0
			}
		}
	},
	colors: {
		'brand': ['#cfedef', '#b1edef', '#83e4ed', '#4ddce8', '#25d1e0', '#0bc3d7', '#00b4c7', '#009cae', '#008597', '#007383'],
		'dark': ['#bec0c4', '#a4a6ab', '#8d9096', '#595d67', '#353940', '#2a2d34', '#23252c', '#191b1f', '#131417', '#0f1013'],
		'gray': ['#f5f7f8', '#eef1f4', '#e5eaee', '#dae0e5', '#c9d2da', '#a8b4bf', '#818d98', '#454f59', '#313a41', '#1f252a']
	},
	primaryColor: 'brand',
	primaryShade: {
		light: 6
	},
	focusRingStyles: {
		styles: theme => ( {
			outlineOffset: '0.125rem',
			outline: `0.125rem solid ${ theme.colors[ theme.primaryColor ][ theme.colorScheme === 'dark' ? 6 : 6 ] }`
		} ),
		inputStyles: theme => ( {
			borderColor: `${ theme.colors[ theme.primaryColor ][ theme.colorScheme === 'dark' ? 6 : 6 ] }`
		} )
	},
	other: {
		darkTextColor: '#08355c'
	}
};
