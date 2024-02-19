import { createStyles, rem } from '@mantine/styles';

export const useFormStyles = createStyles( theme => ( {
	root: {
		marginBottom: rem(25)
	},
	label: {
		fontSize: rem(13),
		fontWeight: 600,
		marginBottom: rem(8)
	},
	incrementingNumberInput: {
		marginBottom: rem(10)
	}
} ) );
