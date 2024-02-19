import { useState } from '@wordpress/element';

import { useDebouncedValue } from '@mantine/hooks';

// @source: https://github.com/recharts/recharts/issues/2027#issuecomment-1282172412
// @mods: removed memoization/callback cache, added debounce

export function useDynamicYAxisWidth( props ) {
	const { yAxisWidthModifier } = props || {};
	const [yAxisWidthState, setYAxisWidthState] = useState(undefined);
	const [ yAxisWidthStateDebounced ] = useDebouncedValue( yAxisWidthState, 200 );

	const chartRef = chartRef => {
		if (
			chartRef != null
			&& chartRef.container != null
		) {
			const tickValueElements = chartRef.container.querySelectorAll(`
				.recharts-cartesian-axis-tick-value[orientation="left"],
				.recharts-cartesian-axis-tick-value[orientation="right"]
			`);
			const highestWidth = [ ...tickValueElements ]
				.map( el => {
					const boundingRect = el.getBoundingClientRect();
					if (
						boundingRect != null
						&& boundingRect.width != null
					) {
						return boundingRect.width;
					}
					return 0;
				})
				.reduce( ( accumulator, value ) => {
					if ( accumulator < value ) {
						return value;
					}
					return accumulator;
				}, 0 );
			setYAxisWidthState( highestWidth );
		}
	}

	const dynamicYAxisWidth = () => {
		if (
			yAxisWidthModifier != null
			&& yAxisWidthStateDebounced != null
		) {
			return yAxisWidthModifier( yAxisWidthStateDebounced );
		}
		return yAxisWidthStateDebounced;
	};

	return { dynamicYAxisWidth, chartRef };
};
