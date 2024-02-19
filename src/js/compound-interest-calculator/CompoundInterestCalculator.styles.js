import { createStyles, rem } from '@mantine/styles';

export const useCompoundInterestCalculatorStyles = createStyles( theme => ( {
	bigNumberCounter: {
		marginBottom: rem(13)
	},
	barChartArea: {
		padding: `${rem(24)} ${rem(19)} ${rem(3)} ${rem(19)}`,
		marginTop: rem(12),
		marginBottom: rem(22),
		[`@media ( min-width: ${theme.breakpoints.sm} )`]: {
			marginTop: rem(28),
			padding: `${rem(24)} ${rem(22)} ${rem(3)} ${rem(19)}`
		}
	},
	pieChartArea: {
		padding: `${rem(5)} ${rem(19)} 0 ${rem(19)}`,
		marginBottom: rem(22),
		[`@media ( min-width: ${theme.breakpoints.md} )`]: {
			padding: `0 ${rem(42)} 0 0`,
		}
	},
	pieChart: {
		marginTop: rem(13),
		marginBottom: rem(15)
	},
	totalTable: {
		marginTop: rem(0),
		marginBottom: rem(15),
		[`@media ( min-width: ${theme.breakpoints.md} )`]: {
			marginTop: rem(30)
		}
	},
	overviewTableArea: {
		padding: `${rem(20)} ${rem(19)} ${rem(20)} ${rem(19)}`,
		[`@media ( min-width: ${theme.breakpoints.md} )`]: {
			padding: `${rem(23)} ${rem(27)} ${rem(23)} ${rem(27)}`
		}
	},
} ) );
