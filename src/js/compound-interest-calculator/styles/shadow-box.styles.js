import { createStyles, rem } from '@mantine/styles';

export const useShadowBoxStyles = createStyles( theme => ( {
	shadowBox: {
		boxShadow: `0 0 ${rem(15)} 0 rgba(17,64,95,0.17)`,
		borderRadius: rem(8),
		border: `${rem(1)} solid #f9fafa`
	}
} ) );
