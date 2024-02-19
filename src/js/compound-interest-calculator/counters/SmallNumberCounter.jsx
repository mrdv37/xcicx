import { forwardRef } from "@wordpress/element";

import { Grid } from '@mantine/core';
import { useComponentDefaultProps } from '@mantine/styles';

import { useSmallNumberCounterStyles } from '../';

const defaultProps = {
	title: 'Hello',
	counter: 1000
};

export const SmallNumberCounter = forwardRef( ( props, ref ) => {
	const {
		title,
		counter,
		className, classNames, styles, ...rest
	} = useComponentDefaultProps( 'SmallNumberCounter', defaultProps, props );

	const { classes, cx } = useSmallNumberCounterStyles( {},
		{ name: 'SmallNumberCounter', classNames, styles }
	);

	return (
		<div className={ cx( classes.root, className ) } { ...{ ref } } >
			<Grid
				gutter={ 0 }
			>
				<Grid.Col span="auto">
					<div className={ classes.title }>
						{ title }
					</div>
				</Grid.Col>
				<Grid.Col span="content">
					<div className={ classes.counter }>
						{ counter }
					</div>
				</Grid.Col>
			</Grid>
		</div>
	);
} );
