import { forwardRef } from "@wordpress/element";

import { Grid, Indicator } from '@mantine/core';
import { useComponentDefaultProps } from '@mantine/styles';

import { useColorDotCounterStyles } from '../';

const defaultProps = {
	title: 'Hello',
	counter: 1000,
	color: '#000000'
};

export const ColorDotCounter = forwardRef( ( props, ref ) => {
	const {
		title,
		counter,
		color,
		className, classNames, styles, ...rest
	} = useComponentDefaultProps( 'ColorDotCounter', defaultProps, props );

	const { classes, cx } = useColorDotCounterStyles(
		{ color },
		{ name: 'ColorDotCounter', classNames, styles }
	);

	return (
		<div className={ cx( classes.root, className ) } { ...{ ref } } >
			<Grid gutter={ 0 } >
				<Grid.Col span="auto">
					<Indicator
						classNames={ {
							indicator: classes.indicator
						} }
						position="top-start"
						offset={ 5 }
						size={ 10 }
						{ ...{ color } }
					>
						<div className={ classes.title }>
							{ title }
						</div>
					</Indicator>
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
