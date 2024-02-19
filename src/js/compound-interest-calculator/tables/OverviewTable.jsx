import { forwardRef } from "@wordpress/element";

import { ScrollArea, Table } from '@mantine/core';
import { useComponentDefaultProps } from '@mantine/styles';

import { useAttributesContext } from '../../block';

import {
	calculateTotalInterets,
	calculateTotalMontant,
	calculateTotalVersements,
	formatToEur,
	useFormContext,
	useOverviewTableStyles
} from '../';

const defaultProps = {};

export const OverviewTable = forwardRef( ( props, ref ) => {
	const {
		className, classNames, styles, ...rest
	} = useComponentDefaultProps( 'OverviewTable', defaultProps, props );

	const { classes, cx } = useOverviewTableStyles( {},
		{ name: 'OverviewTable', classNames, styles }
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
			<ScrollArea h={ 300 }>
				<Table className={ classes.table } highlightOnHover>
					<thead>
						<tr>
							<th>{ attributes.xcicxAnneeLabel }</th>
							<th>{ attributes.xcicxMontantAvantInteretsLabel }</th>
							<th>{ attributes.xcicxInteretsLabel }</th>
							<th>{ attributes.xcicxMontantApresInteretsLabel }</th>
						</tr>
					</thead>
					<tbody>{ rows }</tbody>
				</Table>
			</ScrollArea>
		</div>
	);
} );
