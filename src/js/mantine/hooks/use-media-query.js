import { useMantineTheme } from '@mantine/core';
import { useMediaQuery as useMantineMediaQuery } from '@mantine/hooks';

export function useMediaQuery( rules ) {
	const theme = useMantineTheme();
	const query = rules.map( rule => {
		const compareFunction = ( () => {
			if ( rule[0] === 'min' ) {
				return theme.fn.largerThan;
			} else if ( rule[0] === 'max' ) {
				return theme.fn.smallerThan;
			}
		} )();
		return compareFunction( rule[1] ).replace( '@media ', '' );
	} ).join( ' and ' );
	return useMantineMediaQuery( query );
}
