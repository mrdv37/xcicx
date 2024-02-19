import { createStyles, rem } from '@mantine/core';

export const useIncrementingNumberInputStyles = createStyles( ( theme, {} ) => ( {
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 0,
		borderRadius: rem(8),
		border: `${rem(1)} solid transparent`,
		backgroundColor: theme.white,
		'&:focus-within': {
			borderColor: theme.colors[ theme.primaryColor ][6]
		}
	},
	button: {
		color: theme.other.darkTextColor,
		backgroundColor: theme.colors.gray[2],
		border: `${rem(7)} solid ${theme.white}`,
		borderRadius: rem(14),
		width: rem(21),
		minWidth: rem(21),
		height: rem(21),
		minHeight: rem(21),
		boxSizing: 'content-box',
		fontSize: rem(32),
		'&:hover': {
			backgroundColor: theme.colors.gray[3]
		},
		'&:disabled': {
			borderColor: theme.colors.gray[3],
			opacity: 0.8,
			backgroundColor: 'transparent'
		}
	},
	numberInputRoot: {
		width: '100%'
	},
	numberInputWrapper: {},
	numberInputInput: {
		height: rem(36),
		minHeight: rem(36),
		padding: 0,
		color: theme.other.darkTextColor,
		fontSize: rem(13),
		textAlign: 'center',
		flex: 1
	}
} ) )
