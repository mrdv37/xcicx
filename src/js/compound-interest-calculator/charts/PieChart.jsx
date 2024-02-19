import { forwardRef } from "@wordpress/element";

import { useComponentDefaultProps } from '@mantine/styles';
import {
	Pie,
	PieChart as RechartsPieChart,
	ResponsiveContainer,
	Tooltip
} from "recharts";

import { useAttributesContext } from '../../block';

import {
	calculateTotalVersements,
	calculateTotalInterets,
	formatToEur,
	useFormContext,
	usePieChartStyles
} from '../';

const defaultProps = {};

export const PieChart = forwardRef( ( props, ref ) => {
	const {
		className, classNames, styles, ...rest
	} = useComponentDefaultProps( 'PieChart', defaultProps, props );

	const { classes, cx } = usePieChartStyles( {},
		{ name: 'PieChart', classNames, styles }
	);

	const { attributes } = useAttributesContext();
	const { form } = useFormContext();

	const data = [
		{
			name: attributes.xcicxVersementInitialLabel,
			fill: attributes.xcicxVersementInitialColor,
			value: form.values.versementInitial
		},
		{
			name: attributes.xcicxTotalVersementsLabel,
			fill: attributes.xcicxTotalVersementsColor,
			value: calculateTotalVersements( { ...form.values } )
		},
		{
			name: attributes.xcicxTotalInteretsLabel,
			fill: attributes.xcicxTotalInteretsColor,
			value: calculateTotalInterets( { ...form.values } )
		}
	];

	return (
		<div className={ cx( classes.root, className ) } { ...{ ref } } >
			<ResponsiveContainer>
				<RechartsPieChart>
					<Pie
						dataKey="value"
						data={ data }
						paddingAngle={ 0 }
						stroke="#ffffff"
						strokeWidth={ 2 }
						outerRadius="100%"
					/>
					<Tooltip
						formatter={ number => formatToEur( number ) }
					/>
				</RechartsPieChart>
			</ResponsiveContainer>
		</div>
	);
} );
