import { forwardRef } from "@wordpress/element";

import { useComponentDefaultProps } from '@mantine/styles';
import {
	Bar,
	BarChart as RechartsBarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts';

import { useAttributesContext } from '../../block';
import { useMediaQuery } from '../../mantine';
import { useDynamicYAxisWidth } from '../../recharts';

import {
	calculateTotalVersements,
	calculateTotalInterets,
	formatToEur,
	formatToUnitSymbol,
	useBarChartStyles,
	useFormContext
} from '../';

const defaultProps = {};

export const BarChart = forwardRef( ( props, ref ) => {
	const {
		className, classNames, styles, ...rest
	} = useComponentDefaultProps( 'BarChart', defaultProps, props );

	const { classes, cx } = useBarChartStyles( {},
		{ name: 'BarChart', classNames, styles }
	);

	const { attributes } = useAttributesContext();
	const { form } = useFormContext();
	const { dynamicYAxisWidth, chartRef } = useDynamicYAxisWidth( { yAxisWidthModifier: x => x + 10 } );

	const data = ( () => {
		let years = [];
		for ( let index = 1; index <= form.values.duree; index++ ) {
			years.push( {
				name: index,
				[ attributes.xcicxVersementInitialLabel ]: form.values.versementInitial,
				[ attributes.xcicxTotalVersementsLabel ]: calculateTotalVersements( { ...form.values }, { duree: index } ),
				[ attributes.xcicxTotalInteretsLabel ]: calculateTotalInterets( { ...form.values }, { duree: index } )
			} );
		}
		return years;
	} )();

	return (
		<div className={ cx( classes.root, className ) } { ...{ ref } } >
			<ResponsiveContainer>
				<RechartsBarChart
					data={ data }
					ref={ chartRef }
					margin={ {
						top: 0,
						right: 0,
						left: 0,
						bottom: 0
					} }
				>
					<CartesianGrid vertical={ false } stroke="#edeff1"/>
					<XAxis
						dataKey="name"
						axisLine={ false }
						tickLine={ false }
						tick={ { fill: "#5b5468" } }
					/>
					<YAxis
						tickFormatter={ number => formatToUnitSymbol( number ).toUpperCase() }
						axisLine={ false }
						tickLine={ false }
						tick={ { fill: "#5b5468" } }
						width={ dynamicYAxisWidth() }
					/>
					<Tooltip
						formatter={ number => formatToEur( number ) }
						label={ attributes.xcicxAnneeLabel }
						labelFormatter={ name => attributes.xcicxAnneeLabel + ' : ' + name }
						{ ...( useMediaQuery( [ [ 'max', 'xs' ] ] ) && {
							position: { x: -30, y: 195 }
						} ) }
					/>
					<Legend
						iconType="circle"
						iconSize={ 10 }
					/>
					<Bar
						dataKey={ attributes.xcicxVersementInitialLabel }
						stackId="a"
						fill={ attributes.xcicxVersementInitialColor }
					/>
					<Bar
						dataKey={ attributes.xcicxTotalVersementsLabel }
						stackId="a"
						fill={ attributes.xcicxTotalVersementsColor }
					/>
					<Bar
						dataKey={ attributes.xcicxTotalInteretsLabel }
						stackId="a"
						fill={ attributes.xcicxTotalInteretsColor }
					/>
				</RechartsBarChart>
			</ResponsiveContainer>
		</div>
	);
} );
