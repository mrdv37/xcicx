import { createStyles, rem } from '@mantine/styles';

export const useColorDotCounterStyles = createStyles( ( theme, {
	color
} ) => ( {
	root: {
		color: '#5c546a',
		fontSize: rem(14)
	},
	title: {
		paddingLeft: rem(15)
	},
	counter: {
		paddingRight: rem(11),
		color
	},
	indicator: {
		marginTop: rem(6)
	}
} ) );
