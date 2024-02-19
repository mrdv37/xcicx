import { forwardRef } from '@wordpress/element';

import { Grid, MantineProvider } from '@mantine/core';
import { useComponentDefaultProps } from '@mantine/styles';

import { useAttributesContext } from '../block';
import { useMediaQuery } from '../mantine';

import {
	BarChart,
	BigNumberCounter,
	Form,
	FormContextProvider,
	OverviewTable,
	PieChart,
	TotalTable,
	calculateTotalVersements,
	calculateTotalMontant,
	calculateTotalInterets,
	compoundInterestCalculatorTheme,
	formatToEur,
	formatToInt,
	useCompoundInterestCalculatorStyles,
	useShadowBoxStyles,
	useForm
} from './';

const defaultProps = {};

export const CompoundInterestCalculator = forwardRef( ( props, ref ) => {
	const {
		className, classNames, styles, ...rest
	} = useComponentDefaultProps( 'CompoundInterestCalculator', defaultProps, props );

	const { classes, cx } = useCompoundInterestCalculatorStyles( {},
		{ name: 'CompoundInterestCalculator', classNames, styles }
	);
	const { classes: shadowBoxClasses } = useShadowBoxStyles();

	const { attributes } = useAttributesContext();
	const { form } = useForm();

	return (
		<div className={ cx (
			classes.root,
			'xcicx-compound-interest-calculator'
		) }>
			<MantineProvider theme={ compoundInterestCalculatorTheme }>
				<FormContextProvider { ...{ form } }>
					<Grid gutter={ 38 }>
						<Grid.Col md={ 3 }>
							<Form/>
							<BigNumberCounter
								className={ classes.bigNumberCounter }
								title={ attributes.xcicxTotalVersementsLabel }
								counter={ formatToEur( calculateTotalVersements( { ...form.values } ) ) }
							/>
							<BigNumberCounter
								className={ classes.bigNumberCounter }
								title={ attributes.xcicxTotalInteretsLabel }
								counter={ formatToEur( calculateTotalInterets( { ...form.values } ) ) }
							/>
							<BigNumberCounter
								className={ classes.bigNumberCounter }
								title={ attributes.xcicxTotalMontantLabel }
								counter={ formatToEur( calculateTotalMontant( { ...form.values } ) ) }
							/>
						</Grid.Col>
						<Grid.Col md={ 9 }>
							<Grid>
								<Grid.Col>
									<div className={ cx( shadowBoxClasses.shadowBox, classes.barChartArea) } >
										<BarChart/>
										{ useMediaQuery( [ [ 'max', 'md' ] ] ) && (
											<TotalTable className={ classes.totalTable }/>
										) }
									</div>
								</Grid.Col>
							</Grid>
							<div className={ cx( shadowBoxClasses.shadowBox, classes.pieChartArea) } >
								<Grid gutter={ 0 }>
									<Grid.Col md={ 4 }>
										<PieChart className={ classes.pieChart }/>
									</Grid.Col>
									<Grid.Col md={ 8 }>
										<TotalTable className={ classes.totalTable }/>
									</Grid.Col>
								</Grid>
							</div>
							<Grid>
								<Grid.Col md={ 12 }>
									<div className={ cx( shadowBoxClasses.shadowBox, classes.overviewTableArea) } >
										<OverviewTable/>
									</div>
								</Grid.Col>
							</Grid>
						</Grid.Col>
					</Grid>
				</FormContextProvider>
			</MantineProvider>
		</div>
	);
} );
