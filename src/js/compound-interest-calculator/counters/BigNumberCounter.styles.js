import { createStyles, rem } from '@mantine/styles';

export const useBigNumberCounterStyles = createStyles( theme => ( {
	root: {
		backgroundColor: '#ebf9f7',
		borderRadius: rem(8),
		textAlign: 'center',
		padding: `${rem(14)} ${rem(30)} ${rem(12)} ${rem(30)}`
	},
	title: {
		fontSize: rem(14),
		lineHeight: rem(18),
		color: '#466885',
		paddingBottom: rem(1)
	},
	counter: {
		fontSize: rem(24),
		fontWeight: 700,
		color: theme.other.darkTextColor
	}
} ) );
