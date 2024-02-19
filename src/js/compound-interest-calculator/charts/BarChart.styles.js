import { createStyles, rem } from '@mantine/styles';

export const useBarChartStyles = createStyles( theme => ( {
	root: {
		height: rem(200),
		[`@media ( min-width: ${theme.breakpoints.sm} )`]: {
			height: rem(277),
		},
		'& .recharts-legend-item-text': {
			color: 'inherit !important',
			fontSize: rem(11),
			fontWeight: 500
		},
		'& .xAxis .recharts-cartesian-axis-tick': {
			fontSize: rem(6)
		},
		'& .yAxis .recharts-cartesian-axis-tick': {
			fontSize: rem(10)
		},
		'& .recharts-default-legend': {
			textAlign: 'center',
			[`@media ( max-width: ${theme.breakpoints.sm} )`]: {
				display: 'none'
			}
		},
		'& .recharts-legend-wrapper': {
			transform: `translateY( ${rem(-10)} )`
		},
		'& .recharts-tooltip-wrapper': {
			zIndex: 200
		},
		'& .recharts-default-tooltip': {
			borderRadius: rem(6)
		},
		'& .recharts-tooltip-label, & .recharts-tooltip-item': {
			fontSize: rem(13),
			fontWeight: 500,
			padding: '0 !important',
			margin: '0 !important',
			lineHeight: 1.5
		}
	}
} ) );
