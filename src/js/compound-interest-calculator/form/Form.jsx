import { forwardRef } from "@wordpress/element";

import { useComponentDefaultProps } from '@mantine/styles';

import { useAttributesContext } from '../../block';

import {
	IncrementingNumberInput,
	formatToEur,
	formatToInt,
	useFormContext,
	useFormStyles,
	useIncrementingNumberInputStyles,
} from '../';

const defaultProps = {};

export const Form = forwardRef( ( props, ref ) => {
	const {
		className, classNames, styles, ...rest
	} = useComponentDefaultProps( 'Form', defaultProps, props );

	const { classes, cx } = useFormStyles( {},
		{ name: 'Form', classNames, styles }
	);

	const { attributes } = useAttributesContext();
	const { form } = useFormContext();

	return (
		<div className={ cx( classes.root, className ) } { ...{ ref } } >
			<form className={ classes.form }>
				<label
					className={ classes.label }
					htmlFor="versementInitial"
				>
					{ attributes.xcicxVersementInitialLabel }
				</label>
				<IncrementingNumberInput
					{ ...form.getInputProps( 'versementInitial' ) }
					className={ classes.incrementingNumberInput }
					min={ attributes.xcicxVersementInitialMin }
					max={ attributes.xcicxVersementInitialMax }
					step={ attributes.xcicxVersementInitialStep }
					precision={ 0 }
					formatter={ number => formatToEur( number ) }
					parser={ number => formatToInt( number ) }
				/>
				<label
					className={ classes.label }
					htmlFor="versementsReguliers"
				>
					{ attributes.xcicxVersementsReguliersLabel }
				</label>
				<IncrementingNumberInput
					className={ classes.incrementingNumberInput }
					{ ...form.getInputProps( 'versementsReguliers' ) }
					min={ attributes.xcicxVersementsReguliersMin }
					max={ attributes.xcicxVersementsReguliersMax }
					step={ attributes.xcicxVersementsReguliersStep }
					precision={ 0 }
					formatter={ number => formatToEur( number ) }
					parser={ number => formatToInt( number ) }
				/>
				<label
					className={ classes.label }
					htmlFor="rendementPrevisionnel"
				>
					{ attributes.xcicxRendementPrevisionnelLabel }
				</label>
				<IncrementingNumberInput
					className={ classes.incrementingNumberInput }
					{ ...form.getInputProps( 'rendementPrevisionnel' ) }
					min={ attributes.xcicxRendementPrevisionnelMin }
					max={ attributes.xcicxRendementPrevisionnelMax }
					step={ attributes.xcicxRendementPrevisionnelStep }
					precision={ 0 }
					formatter={ number => number + ' %' }
					parser={ number => formatToInt( number ) }
				/>
				<label className={ classes.label } htmlFor="duree" >
					{ attributes.xcicxDureeLabel }
				</label>
				<IncrementingNumberInput
					{ ...form.getInputProps( 'duree' ) }
					className={ classes.incrementingNumberInput }
					min={ attributes.xcicxDureeMin }
					max={ attributes.xcicxDureeMax }
					step={ attributes.xcicxDureeStep }
					precision={ 0 }
					formatter={ number => number + ' ' + attributes.xcicxAnsLabel }
					parser={ number => formatToInt( number ) }
				/>
			</form>
		</div>
	);
} );
