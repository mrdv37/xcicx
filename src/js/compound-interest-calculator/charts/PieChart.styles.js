import { createStyles, rem } from '@mantine/styles';

export const usePieChartStyles = createStyles( theme => ( {
	root: {
		height: rem(200),
		[`@media ( min-width: ${theme.breakpoints.sm} )`]: {
			height: rem(163),
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
