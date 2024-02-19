import { forwardRef } from "@wordpress/element";

import { useComponentDefaultProps } from '@mantine/styles';

import { useBigNumberCounterStyles } from '../';

const defaultProps = {
	title: 'Hello',
	counter: 1000
};

export const BigNumberCounter = forwardRef( ( props, ref ) => {
	const {
		title,
		counter,
		className, classNames, styles, ...rest
	} = useComponentDefaultProps( 'BigNumberCounter', defaultProps, props );

	const { classes, cx } = useBigNumberCounterStyles( {},
		{ name: 'BigNumberCounter', classNames, styles }
	);

	return (
		<div className={ cx( classes.root, className ) } { ...{ ref } } >
			<div className={ classes.title }>
				{ title }
			</div>
			<div className={ classes.counter }>
				{ counter }
			</div>
		</div>
	);
} );
