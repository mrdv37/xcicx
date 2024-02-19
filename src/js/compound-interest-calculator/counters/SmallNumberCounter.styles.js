import { createStyles, rem } from '@mantine/styles';

export const useSmallNumberCounterStyles = createStyles( theme => ( {
	root: {
		background: theme.colors.gray[0],
		borderRadius: rem(6),
		color: theme.other.darkTextColor,
		fontSize: rem(14),
		fontWeight: 500,
		padding: `${rem(5)} ${rem(11)} ${rem(8)} ${rem(20)}`
	},
	counter: {
		fontWeight: 700
	}
} ) );
