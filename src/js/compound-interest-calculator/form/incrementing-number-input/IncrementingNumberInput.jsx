import { forwardRef, useRef } from "@wordpress/element";

import { ActionIcon, NumberInput } from "@mantine/core";
import { useComponentDefaultProps } from '@mantine/styles';
import { BsDash, BsPlus } from 'react-icons/bs';

import { useIncrementingNumberInputStyles, useShadowBoxStyles} from '../../';

const defaultProps = {
	decrementComponent: <BsDash/>,
	incrementComponent: <BsPlus/>
};

export const IncrementingNumberInput = forwardRef( ( props, ref ) => {
	const {
		decrementComponent,
		incrementComponent,
		className, classNames, styles, ...rest
	} = useComponentDefaultProps( 'IncrementingNumberInput', defaultProps, props );

	const { classes, cx } = useIncrementingNumberInputStyles( {},
		{ name: 'IncrementingNumberInput', classNames, styles }
	);
	const { classes: shadowBoxClasses } = useShadowBoxStyles();

	const handlersRef = useRef();

	return (
		<div className={ cx( shadowBoxClasses.shadowBox, classes.root, className ) } >
			<ActionIcon
				className={ classes.button }
				size={ 28 }
				variant="transparent"
				onClick={ () => handlersRef.current?.decrement() }
				onMouseDown={ event => event.preventDefault() }
			>
				{ decrementComponent }
			</ActionIcon>
			<NumberInput
				classNames={ {
					root: classes.numberInputRoot,
					wrapper: classes.numberInputWrapper,
					input: classes.numberInputInput
				} }
				variant="unstyled"
				hideControls
				{ ...{ handlersRef } }
				{ ...{ ref } }
				{ ...rest }
			/>
			<ActionIcon
				className={ classes.button }
				size={ 28 }
				variant="transparent"
				onClick={ () => handlersRef.current?.increment() }
				onMouseDown={ event => event.preventDefault() }
			>
				{ incrementComponent }
			</ActionIcon>
		</div>
	);
} );
