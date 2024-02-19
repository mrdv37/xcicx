import { forwardRef } from "@wordpress/element";

import { ScrollArea, Table } from '@mantine/core';
import { useComponentDefaultProps } from '@mantine/styles';

import { useAttributesContext } from '../../block';

import {
	ColorDotCounter,
	SmallNumberCounter,
	calculateTotalInterets,
	calculateTotalMontant,
	calculateTotalVersements,
	formatToEur,
	useFormContext,
	useTotalTableStyles
} from '../';

const defaultProps = {};

export const TotalTable = forwardRef( ( props, ref ) => {
	const {
		className, classNames, styles, ...rest
	} = useComponentDefaultProps( 'TotalTable', defaultProps, props );

	const { classes, cx } = useTotalTableStyles( {},
		{ name: 'TotalTable', classNames, styles }
	);

	const { attributes } = useAttributesContext();
	const { form } = useFormContext();

	const rows = ( () => {
		let rows = [];
		for ( let index = 1; index <= form.values.duree; index++ ) {
			rows.push(
				<tr key={ index }>
					<td>{ index }</td>
					<td>{ formatToEur(
						calculateTotalVersements( { ...form.values }, { duree: index } )
						+ calculateTotalInterets( { ...form.values }, { duree: index - 1 } )
					) }</td>
					<td>{ formatToEur(
						calculateTotalInterets( { ...form.values }, { duree: index } )
					) }</td>
					<td>{ formatToEur(
						calculateTotalMontant( { ...form.values }, { duree: index } )
					) }</td>
				</tr>
			)
		}
		return rows;
	} )();

	return (
		<div className={ cx( classes.root, className ) } { ...{ ref } } >
			<ColorDotCounter
				className={ classes.colorDotCounter }
				title={ attributes.xcicxVersementInitialLabel }
				counter={ formatToEur( form.values.versementInitial ) }
				color={ attributes.xcicxVersementInitialColor }
			/>
			<ColorDotCounter
				className={ classes.colorDotCounter }
				title={ attributes.xcicxTotalVersementsLabel }
				counter={ formatToEur( calculateTotalVersements( { ...form.values } ) ) }
				color={ attributes.xcicxTotalVersementsColor }
			/>
			<ColorDotCounter
				className={ classes.colorDotCounter }
				title={ attributes.xcicxTotalInteretsLabel }
				counter={ formatToEur( calculateTotalInterets( { ...form.values } ) ) }
				color={ attributes.xcicxTotalInteretsColor }
			/>
			<SmallNumberCounter
				className={ classes.smallNumberCounter }
				title={ attributes.xcicxTotalMontantLabel }
				counter={ formatToEur( calculateTotalMontant( { ...form.values } ) ) }
			/>
		</div>
	);
} );
