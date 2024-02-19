import { createStyles, rem } from '@mantine/styles';

export const useOverviewTableStyles = createStyles( theme => ( {
	table: {
		'& thead tr th': {
			background: theme.other.darkTextColor,
			color: theme.white,
			position: 'sticky',
			top: 0
		},
		'& thead tr th:first-of-type': {
			borderTopLeftRadius: rem(8)
		},
		'& thead tr th:last-of-type': {
			borderTopRightRadius: rem(8),
		},
		'& thead tr th, & tfoot tr th, & tbody tr th': {
			fontSize: rem(12),
			fontWeight: 700,
			paddingTop: rem(9),
			paddingBottom: rem(8),
			textAlign: 'right'
		},
		'& tbody tr td': {
			fontSize: rem(12),
			fontWeight: 600,
			color: '#466885',
			paddingTop: rem(7),
			paddingBottom: rem(7),
			textAlign: 'right'
		},
		'& thead tr th:last-of-type, & tbody tr td:last-of-type': {
			paddingRight: rem(20)
		},
		'& thead tr th:first-of-type, & tfoot tr th:first-of-type, & tbody tr th:first-of-type': {
			textAlign: 'center'
		},
		'& tbody tr td:first-of-type': {
			textAlign: 'center'
		}
	},
} ) );
